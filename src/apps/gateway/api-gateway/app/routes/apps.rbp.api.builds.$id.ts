// src/apps/gateway/api-gateway/app/routes/apps.rbp.api.builds.$id.ts
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";
import { UpdateSlotsRequestSchema } from "../../../../../shared/sdk/types";

// GET /apps/rbp/api/builds/:id
export async function loader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (!id) return json({ error: "Missing id" }, { status: 400 });

  const build = await prisma.build.findUnique({
    where: { id },
    include: { slots: { orderBy: { position: "asc" } } }
  });
  if (!build) return json({ error: "Not found" }, { status: 404 });

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

// PATCH/DELETE /apps/rbp/api/builds/:id
export async function action({ request, params }: ActionFunctionArgs) {
  const { id } = params;
  if (!id) return json({ error: "Missing id" }, { status: 400 });

  if (request.method === "DELETE") {
    await prisma.build.delete({ where: { id } }).catch(() => null);
    return json({ ok: true });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid or missing JSON body" }, { status: 400 });
  }

  const parsed = UpdateSlotsRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ error: "Bad payload", issues: parsed.error.issues }, { status: 400 });
  }

  const desired = parsed.data.slots;
  const existing = await prisma.buildSlot.findMany({
    where: { buildId: id },
    orderBy: { position: "asc" }
  });

  const byPos = new Map(existing.map(s => [s.position, s]));
  const desiredPos = new Set(desired.map(s => s.position));

  // delete positions no longer present
  const toDelete = existing.filter(s => !desiredPos.has(s.position)).map(s => s.id);
  if (toDelete.length) {
    await prisma.buildSlot.deleteMany({ where: { id: { in: toDelete } } });
  }

  // upsert desired positions
  for (const s of desired) {
    const found = byPos.get(s.position);
    if (found) {
      await prisma.buildSlot.update({
        where: { id: found.id },
        data: {
          type: s.type,
          label: s.label,
          productId: s.productId ?? null,
          variantId: s.variantId ?? null
        }
      });
    } else {
      await prisma.buildSlot.create({
        data: {
          buildId: id,
          type: s.type,
          label: s.label,
          productId: s.productId ?? null,
          variantId: s.variantId ?? null,
          position: s.position
        }
      });
    }
  }

  const build = await prisma.build.findUnique({
    where: { id },
    include: { slots: { orderBy: { position: "asc" } } }
  });
  if (!build) return json({ error: "Not found" }, { status: 404 });

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
