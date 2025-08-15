import { json } from "@remix-run/node";

/** GET /ping */
export async function loader() {
  return json({ ok: true, service: "gateway" });
}

/** POST /ping */
export async function action() {
  return json({ ok: true, service: "gateway" });
}
