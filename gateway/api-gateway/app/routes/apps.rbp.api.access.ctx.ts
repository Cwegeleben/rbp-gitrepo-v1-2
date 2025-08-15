import { json } from "@remix-run/node";
export async function loader() {
  return json({ ok: true, plan: "free", featureFlags: { catalog_v1: true } }, { headers: { "Cache-Control": "no-store" } });
}
