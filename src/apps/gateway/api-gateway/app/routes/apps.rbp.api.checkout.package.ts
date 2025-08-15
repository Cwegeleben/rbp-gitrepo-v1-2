import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";
import { PackageRequestSchema } from "../../../../../shared/sdk/types";

export async function action({ request }: ActionFunctionArgs) {
  const domain = "demo.myshopify.com"; // TODO: real App Proxy later
  const tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant) return json({ items: [], subtotalCents: 0 });

  const raw = await request.json();
  const { buildId, quantityMap } = PackageRequestSchema.parse(raw);

  // Load build + slots
  const build = await prisma.build.findUnique({
    where: { id: buildId },
    include: { slots: true }
  });
  if (!build || build.tenantId !== tenant.id) {
    return json({ items: [], subtotalCents: 0 });
  }

  // Collect selected productIds from slots
  const selectedProductIds = build.slots
    .map(s => s.productId)
    .filter((pid): pid is string => !!pid);

  if (selectedProductIds.length === 0) {
    return json({ items: [], subtotalCents: 0 });
  }

  // Fetch the products
  const products = await prisma.product.findMany({
    where: { tenantId: tenant.id, id: { in: selectedProductIds } }
  });
  const byId = new Map(products.map(p => [p.id, p]));

  // Build line items (default qty 1, override via quantityMap if provided)
  const items = selectedProductIds
    .map(pid => byId.get(pid))
    .filter(Boolean)
    .map(p => {
      const quantity = quantityMap?.[p!.id] ?? 1;
      return {
        productId: p!.id,
        name: p!.name,
        priceCents: p!.priceCents,
        quantity
      };
    });

  const subtotalCents = items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);

  return json({ items, subtotalCents });
}

// No GET
export async function loader() {
  return json({ ok: true });
}
