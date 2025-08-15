import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";

/** GET /apps/rbp/api/lists */
export async function loader(_args: LoaderFunctionArgs) {
  const domain = "demo.myshopify.com";
  const tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant) return json({ items: [] });

  const lists = await prisma.list.findMany({
    where: { tenantId: tenant.id },
    orderBy: { createdAt: "desc" }
  });

  return json({
    items: lists.map(l => ({ id: l.id, name: l.name, createdAt: l.createdAt.toISOString() }))
  });
}
