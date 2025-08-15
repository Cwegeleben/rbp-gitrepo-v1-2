import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";

/**
 * POST /apps/rbp/api/builds
 * Creates a new build with default slots from tenant.flags.defaultSlots (array of strings).
 */
export async function action(_args: ActionFunctionArgs) {
  const domain = "demo.myshopify.com";
  const tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant) return json({ error: "Tenant not found" }, { status: 404 });

  const defaultSlots = Array.isArray((tenant.flags as any)?.defaultSlots)
    ? ((tenant.flags as any).defaultSlots as string[])
    : [];

  const build = await prisma.build.create({
    data: {
      tenantId: tenant.id,
      slots: {
        create: defaultSlots.map((name, i) => ({
          type: name,
          label: name,
          position: i
        }))
      }
    },
    include: { slots: { orderBy: { position: "asc" } } }
  });

  return json({
    build: {
      id: build.id,
      createdAt: build.createdAt.toISOString(),
      updatedAt: build.updatedAt.toISOString(),
      slots: build.slots.map(s => ({
        id: s.id,
        type: s.type,
        label: s.label,
        productId: s.productId ?? null,
        variantId: s.variantId ?? null,
        position: s.position
      }))
    }
  });
}

// (no GET on index)
export async function loader(_args: LoaderFunctionArgs) {
  return json({ ok: true });
}
