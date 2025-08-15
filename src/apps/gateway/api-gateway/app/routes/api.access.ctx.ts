import { json } from "@remix-run/node";
export async function loader(){
  return json({ ok:true, plan:"free", featureFlags:{ catalog_v1:true, builds_v1:true, checkout_v1:false } },
              { headers:{ "Cache-Control":"no-store" } });
}
