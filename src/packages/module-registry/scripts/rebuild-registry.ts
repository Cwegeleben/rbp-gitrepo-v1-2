import fs from "fs";
import path from "path";
import crypto from "crypto";

const modulesDir = path.resolve("src/modules");
const registryPath = path.resolve("src/modules/registry.json");

function checksum(filePath: string) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function main() {
  console.log("📦 Rebuilding module registry...");
  const registry: Record<string, { version: string; path: string; checksum: string | null }> = {};

  if (!fs.existsSync(modulesDir)) {
    fs.mkdirSync(modulesDir, { recursive: true });
  }

  for (const moduleName of fs.readdirSync(modulesDir)) {
    const modulePath = path.join(modulesDir, moduleName);
    if (!fs.lstatSync(modulePath).isDirectory()) continue;
    const version = "0.1.0"; // TODO: read from module package.json
    const filePath = path.join(modulePath, version, "index.js"); // e.g., src/modules/shell/0.1.0/index.js
    registry[moduleName] = {
      version,
      path: `/apps/rbp/modules/${moduleName}/${version}/index.js`,
      checksum: fs.existsSync(filePath) ? checksum(filePath) : null
    };
  }

  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), "utf-8");
  console.log(`✅ Registry written: ${registryPath}`);
}

main();
