import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";

export async function loader({ request }: LoaderFunctionArgs) {
  // TODO: replace with real Shopify proxy ctx; dev-only domain for now:
  const domain = "demo.myshopify.com";
  const url = new URL(request.url);
  const collectionId = url.searchParams.get("collection");

  const tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant || !collectionId) return json({ items: [] });

  const products = await prisma.product.findMany({
    where: { tenantId: tenant.id, collectionId },
    orderBy: { name: "asc" }
  });

  return json({
    items: products.map(p => ({
      id: p.id,
      collectionId: p.collectionId,
      name: p.name,
      priceCents: p.priceCents
    }))
  });
}
