import { json } from "@remix-run/node";
import fs from "node:fs/promises";
import path from "node:path";

async function readRegistry(): Promise<unknown> {
  // Try multiple candidates to be resilient to cwd differences in dev/prod
  const candidates = [
    path.join(process.cwd(), "src/modules/registry.json"),
    path.resolve(process.cwd(), "../../../../src/modules/registry.json"),
    path.resolve("src/modules/registry.json"),
  ];

  for (const p of candidates) {
    try {
      const buf = await fs.readFile(p, "utf-8");
      try {
        return JSON.parse(buf);
      } catch {
        // Malformed JSON at this path — skip to next candidate
        continue;
      }
    } catch (err: any) {
      if (err?.code === "ENOENT") {
        // Not here — try next candidate
        continue;
      }
      // Some other FS error (permissions, etc.). Skip to next.
      continue;
    }
  }

  // Nothing found — return empty registry instead of 500
  return {};
}

export async function loader() {
  const data = await readRegistry();
  return json(data, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
