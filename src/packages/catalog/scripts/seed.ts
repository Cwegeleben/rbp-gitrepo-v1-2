import { prisma } from "../../../shared/db/client";
import { demoCollections, demoProducts } from "../fixtures/demo-data";

async function main() {
  console.log("🌱 Seeding RBP DB (SQLite)...");
  const tenant = await prisma.tenant.upsert({
    where: { domain: "demo.myshopify.com" },
    update: {},
    create: {
      domain: "demo.myshopify.com",
      plan: "pro",
      flags: { allModules: true, defaultSlots: ["Blanks","Reel Seat","Butt Cap"] }
    }
  });

  for (const col of demoCollections) {
    await prisma.collection.upsert({
      where: { id: col.id },
      update: { name: col.name, tenantId: tenant.id },
      create: { id: col.id, name: col.name, tenantId: tenant.id }
    });
  }

  for (const p of demoProducts) {
    await prisma.product.upsert({
      where: { id: p.id },
      update: { name: p.name, priceCents: p.priceCents, tenantId: tenant.id, collectionId: p.collectionId },
      create: { id: p.id, name: p.name, priceCents: p.priceCents, tenantId: tenant.id, collectionId: p.collectionId }
    });
  }
  console.log("✅ Seed complete");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
