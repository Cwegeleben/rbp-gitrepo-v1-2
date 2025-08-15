import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { Buffer } from "node:buffer";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { name, version } = params;
  if (!name || !version) return json({ error: "Bad path" }, { status: 400 });

  // Resolve from monorepo root to: src/modules/<name>/<version>/index.js
  const baseDir = path.resolve(process.cwd(), "../../../../src/modules");
  const filePath = path.join(baseDir, name, version, "index.js");

  try {
    const [buf, stat] = await Promise.all([
      fs.readFile(filePath),
      fs.stat(filePath)
    ]);

    // ETag + conditional request
    const etag = crypto.createHash("sha256").update(buf).digest("hex");
    const ifNoneMatch = request.headers.get("if-none-match");
    if (ifNoneMatch && ifNoneMatch === etag) {
      return new Response(null, { status: 304, headers: { ETag: etag } });
    }

    return new Response(buf as Buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "Content-Length": String(buf.byteLength),
        ETag: etag,
        "Last-Modified": stat.mtime.toUTCString()
      }
    });
  } catch {
    return json({ error: "Module file not found" }, { status: 404 });
  }
}
