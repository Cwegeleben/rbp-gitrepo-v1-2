import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "../../../../../shared/db/client";

export async function loader(_args: LoaderFunctionArgs) {
  const domain = "demo.myshopify.com"; // TODO: replace with Shopify session check

  const tenant = await prisma.tenant.findUnique({
    where: { domain },
  });

  if (!tenant) {
    return json({ error: "Tenant not found" }, { status: 404 });
  }

  return json({
    tenant,
    now: new Date().toISOString(),
  });
}
