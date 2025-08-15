import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";
import { SaveToListRequestSchema } from "../../../../../shared/sdk/types";

/** POST /apps/rbp/api/builds/:id/list  body: { name } */
export async function action({ request, params }: ActionFunctionArgs) {
  const { id } = params;
  if (!id) return json({ error: "Missing id" }, { status: 400 });

  const payload = await request.json();
  const { name } = SaveToListRequestSchema.parse(payload);

  const domain = "demo.myshopify.com";
  const tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant) return json({ error: "Tenant not found" }, { status: 404 });

  const list = await prisma.list.upsert({
    where: { tenantId_name: { tenantId: tenant.id, name } },
    update: {},
    create: { tenantId: tenant.id, name }
  });

  await prisma.buildOnList.upsert({
    where: { buildId_listId: { buildId: id, listId: list.id } },
    update: {},
    create: { buildId: id, listId: list.id }
  });

  return json({
    list: { id: list.id, name: list.name, createdAt: list.createdAt.toISOString() },
    buildId: id
  });
}
