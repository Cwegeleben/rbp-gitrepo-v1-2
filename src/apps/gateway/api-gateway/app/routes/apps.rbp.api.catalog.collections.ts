import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";

export async function loader(_args: LoaderFunctionArgs) {
  // TODO: replace with real Shopify proxy ctx; dev-only domain for now:
  const domain = "demo.myshopify.com";
  const tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant) return json({ items: [] });

  const collections = await prisma.collection.findMany({
    where: { tenantId: tenant.id },
    orderBy: { name: "asc" }
  });

  return json({
    items: collections.map(c => ({ id: c.id, name: c.name }))
  });
}
