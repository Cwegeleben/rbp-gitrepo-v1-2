import fs from "fs";
import path from "path";

async function main() {
  console.log("🛠  Generating mock supplier CSV...");
  const outPath = path.resolve(__dirname, "../fixtures/supplier.csv");
  const csv = [
    "id,name,priceCents,stock",
    "SUP-001,Sample Blank XL,15900,8",
    "SUP-002,Sample Reel Seat TRG,4500,25"
  ].join("\n");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, csv, "utf-8");
  console.log(`✅ Wrote ${outPath}`);
}
main().catch((e)=>{ console.error(e); process.exit(1); });
