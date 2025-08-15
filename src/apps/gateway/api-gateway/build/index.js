var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// ../../../../node_modules/.pnpm/@remix-run+dev@2.17.0_@remix-run+react@2.17.0_react-dom@18.3.1_react@18.3.1__react@18.3_41d50b8e2900ac1533c0eccba8c9f8ae/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "../../../../node_modules/.pnpm/@remix-run+dev@2.17.0_@remix-run+react@2.17.0_react-dom@18.3.1_react@18.3.1__react@18.3_41d50b8e2900ac1533c0eccba8c9f8ae/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "../../../../node_modules/.pnpm/@remix-run+dev@2.17.0_@remix-run+react@2.17.0_react-dom@18.3.1_react@18.3.1__react@18.3_41d50b8e2900ac1533c0eccba8c9f8ae/node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 5,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 5,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 8,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 8,
        columnNumber: 41
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/apps.rbp.modules.$name.$version.index[.]js.ts
var apps_rbp_modules_name_version_index_js_exports = {};
__export(apps_rbp_modules_name_version_index_js_exports, {
  loader: () => loader
});
import { json } from "@remix-run/node";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
async function loader({ params, request }) {
  let { name, version } = params;
  if (!name || !version)
    return json({ error: "Bad path" }, { status: 400 });
  let baseDir = path.resolve(process.cwd(), "../../../../src/modules"), filePath = path.join(baseDir, name, version, "index.js");
  try {
    let [buf, stat] = await Promise.all([
      fs.readFile(filePath),
      fs.stat(filePath)
    ]), etag = crypto.createHash("sha256").update(buf).digest("hex"), ifNoneMatch = request.headers.get("if-none-match");
    return ifNoneMatch && ifNoneMatch === etag ? new Response(null, { status: 304, headers: { ETag: etag } }) : new Response(buf, {
      status: 200,
      headers: {
        "Content-Type": "application/javascript; charset=utf-8",
        "Cache-Control": "public, max-age=300",
        "Content-Length": String(buf.byteLength),
        ETag: etag,
        "Last-Modified": stat.mtime.toUTCString()
      }
    });
  } catch {
    return json({ error: "Module file not found" }, { status: 404 });
  }
}

// app/routes/apps.rbp.api.catalog.collections.ts
var apps_rbp_api_catalog_collections_exports = {};
__export(apps_rbp_api_catalog_collections_exports, {
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";

// ../../../shared/db/client.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient();

// app/routes/apps.rbp.api.catalog.collections.ts
async function loader2(_args) {
  let domain = "demo.myshopify.com", tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant)
    return json2({ items: [] });
  let collections = await prisma.collection.findMany({
    where: { tenantId: tenant.id },
    orderBy: { name: "asc" }
  });
  return json2({
    items: collections.map((c) => ({ id: c.id, name: c.name }))
  });
}

// app/routes/apps.rbp.modules.registry[.]json.ts
var apps_rbp_modules_registry_json_exports = {};
__export(apps_rbp_modules_registry_json_exports, {
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import fs2 from "node:fs/promises";
import path2 from "node:path";
async function readRegistry() {
  let candidates = [
    path2.join(process.cwd(), "src/modules/registry.json"),
    path2.resolve(process.cwd(), "../../../../src/modules/registry.json"),
    path2.resolve("src/modules/registry.json")
  ];
  for (let p of candidates)
    try {
      let buf = await fs2.readFile(p, "utf-8");
      try {
        return JSON.parse(buf);
      } catch {
        continue;
      }
    } catch (err) {
      if (err?.code === "ENOENT")
        continue;
      continue;
    }
  return {};
}
async function loader3() {
  let data = await readRegistry();
  return json3(data, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

// app/routes/apps.rbp.api.catalog.products.ts
var apps_rbp_api_catalog_products_exports = {};
__export(apps_rbp_api_catalog_products_exports, {
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
async function loader4({ request }) {
  let domain = "demo.myshopify.com", collectionId = new URL(request.url).searchParams.get("collection"), tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant || !collectionId)
    return json4({ items: [] });
  let products = await prisma.product.findMany({
    where: { tenantId: tenant.id, collectionId },
    orderBy: { name: "asc" }
  });
  return json4({
    items: products.map((p) => ({
      id: p.id,
      collectionId: p.collectionId,
      name: p.name,
      priceCents: p.priceCents
    }))
  });
}

// app/routes/apps.rbp.api.checkout.package.ts
var apps_rbp_api_checkout_package_exports = {};
__export(apps_rbp_api_checkout_package_exports, {
  action: () => action,
  loader: () => loader5
});
import { json as json5 } from "@remix-run/node";

// ../../../shared/sdk/schema.ts
import { z } from "zod";
var FlagsSchema = z.record(z.string(), z.unknown()), TenantSchema = z.object({
  id: z.number().int(),
  domain: z.string().min(3),
  plan: z.string().min(1),
  flags: FlagsSchema
}), TenantContextSchema = z.object({
  tenant: TenantSchema,
  now: z.string().datetime()
}), CollectionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1)
}), ProductSchema = z.object({
  id: z.string().min(1),
  collectionId: z.string().min(1),
  name: z.string().min(1),
  priceCents: z.number().int().nonnegative()
}), CollectionsResponseSchema = z.object({
  items: z.array(CollectionSchema)
}), ProductsResponseSchema = z.object({
  items: z.array(ProductSchema)
});

// ../../../shared/sdk/schema.builds.ts
import { z as z2 } from "zod";
var SlotSchema = z2.object({
  id: z2.string().optional(),
  type: z2.string().min(1),
  label: z2.string().min(1),
  productId: z2.string().nullable().optional(),
  variantId: z2.string().nullable().optional(),
  position: z2.number().int().nonnegative()
}), BuildSchema = z2.object({
  id: z2.string(),
  slots: z2.array(SlotSchema),
  createdAt: z2.string().datetime(),
  updatedAt: z2.string().datetime()
}), CreateBuildResponseSchema = z2.object({
  build: BuildSchema
}), GetBuildResponseSchema = z2.object({
  build: BuildSchema
}), UpdateSlotsRequestSchema = z2.object({
  slots: z2.array(SlotSchema)
  // full desired state; server will upsert/reorder
}), UpdateSlotsResponseSchema = z2.object({
  build: BuildSchema
}), ListSchema = z2.object({
  id: z2.string(),
  name: z2.string(),
  createdAt: z2.string().datetime()
}), ListsResponseSchema = z2.object({
  items: z2.array(ListSchema)
}), SaveToListRequestSchema = z2.object({
  name: z2.string().min(1)
}), SaveToListResponseSchema = z2.object({
  list: ListSchema,
  buildId: z2.string()
});

// ../../../shared/sdk/schema.checkout.ts
import { z as z3 } from "zod";
var PackageRequestSchema = z3.object({
  buildId: z3.string().min(1),
  quantityMap: z3.record(z3.string(), z3.number().int().positive()).optional()
  // productId -> qty
}), LineItemSchema = z3.object({
  productId: z3.string().min(1),
  name: z3.string().min(1),
  priceCents: z3.number().int().nonnegative(),
  quantity: z3.number().int().positive()
}), PackageResponseSchema = z3.object({
  items: z3.array(LineItemSchema),
  subtotalCents: z3.number().int().nonnegative()
});

// app/routes/apps.rbp.api.checkout.package.ts
async function action({ request }) {
  let domain = "demo.myshopify.com", tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant)
    return json5({ items: [], subtotalCents: 0 });
  let raw = await request.json(), { buildId, quantityMap } = PackageRequestSchema.parse(raw), build = await prisma.build.findUnique({
    where: { id: buildId },
    include: { slots: !0 }
  });
  if (!build || build.tenantId !== tenant.id)
    return json5({ items: [], subtotalCents: 0 });
  let selectedProductIds = build.slots.map((s) => s.productId).filter((pid) => !!pid);
  if (selectedProductIds.length === 0)
    return json5({ items: [], subtotalCents: 0 });
  let products = await prisma.product.findMany({
    where: { tenantId: tenant.id, id: { in: selectedProductIds } }
  }), byId = new Map(products.map((p) => [p.id, p])), items = selectedProductIds.map((pid) => byId.get(pid)).filter(Boolean).map((p) => {
    let quantity = quantityMap?.[p.id] ?? 1;
    return {
      productId: p.id,
      name: p.name,
      priceCents: p.priceCents,
      quantity
    };
  }), subtotalCents = items.reduce((sum, i) => sum + i.priceCents * i.quantity, 0);
  return json5({ items, subtotalCents });
}
async function loader5() {
  return json5({ ok: !0 });
}

// app/routes/apps.rbp.api.builds.$id.list.ts
var apps_rbp_api_builds_id_list_exports = {};
__export(apps_rbp_api_builds_id_list_exports, {
  action: () => action2
});
import { json as json6 } from "@remix-run/node";
async function action2({ request, params }) {
  let { id } = params;
  if (!id)
    return json6({ error: "Missing id" }, { status: 400 });
  let payload = await request.json(), { name } = SaveToListRequestSchema.parse(payload), domain = "demo.myshopify.com", tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant)
    return json6({ error: "Tenant not found" }, { status: 404 });
  let list = await prisma.list.upsert({
    where: { tenantId_name: { tenantId: tenant.id, name } },
    update: {},
    create: { tenantId: tenant.id, name }
  });
  return await prisma.buildOnList.upsert({
    where: { buildId_listId: { buildId: id, listId: list.id } },
    update: {},
    create: { buildId: id, listId: list.id }
  }), json6({
    list: { id: list.id, name: list.name, createdAt: list.createdAt.toISOString() },
    buildId: id
  });
}

// app/routes/apps.rbp.api.builds._index.ts
var apps_rbp_api_builds_index_exports = {};
__export(apps_rbp_api_builds_index_exports, {
  action: () => action3,
  loader: () => loader6
});
import { json as json7 } from "@remix-run/node";
async function action3(_args) {
  let domain = "demo.myshopify.com", tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant)
    return json7({ error: "Tenant not found" }, { status: 404 });
  let defaultSlots = Array.isArray(tenant.flags?.defaultSlots) ? tenant.flags.defaultSlots : [], build = await prisma.build.create({
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
  return json7({
    build: {
      id: build.id,
      createdAt: build.createdAt.toISOString(),
      updatedAt: build.updatedAt.toISOString(),
      slots: build.slots.map((s) => ({
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
async function loader6(_args) {
  return json7({ ok: !0 });
}

// app/routes/apps.rbp.api.lists._index.ts
var apps_rbp_api_lists_index_exports = {};
__export(apps_rbp_api_lists_index_exports, {
  loader: () => loader7
});
import { json as json8 } from "@remix-run/node";
async function loader7(_args) {
  let domain = "demo.myshopify.com", tenant = await prisma.tenant.findUnique({ where: { domain } });
  if (!tenant)
    return json8({ items: [] });
  let lists = await prisma.list.findMany({
    where: { tenantId: tenant.id },
    orderBy: { createdAt: "desc" }
  });
  return json8({
    items: lists.map((l) => ({ id: l.id, name: l.name, createdAt: l.createdAt.toISOString() }))
  });
}

// app/routes/apps.rbp.api.access.ctx.ts
var apps_rbp_api_access_ctx_exports = {};
__export(apps_rbp_api_access_ctx_exports, {
  loader: () => loader8
});
import { json as json9 } from "@remix-run/node";
async function loader8(_args) {
  let domain = "demo.myshopify.com", tenant = await prisma.tenant.findUnique({
    where: { domain }
  });
  return tenant ? json9({
    tenant,
    now: (/* @__PURE__ */ new Date()).toISOString()
  }) : json9({ error: "Tenant not found" }, { status: 404 });
}

// app/routes/apps.rbp.api.builds.$id.ts
var apps_rbp_api_builds_id_exports = {};
__export(apps_rbp_api_builds_id_exports, {
  action: () => action4,
  loader: () => loader9
});
import { json as json10 } from "@remix-run/node";
async function loader9({ params }) {
  let { id } = params;
  if (!id)
    return json10({ error: "Missing id" }, { status: 400 });
  let build = await prisma.build.findUnique({
    where: { id },
    include: { slots: { orderBy: { position: "asc" } } }
  });
  return build ? json10({
    build: {
      id: build.id,
      createdAt: build.createdAt.toISOString(),
      updatedAt: build.updatedAt.toISOString(),
      slots: build.slots.map((s) => ({
        id: s.id,
        type: s.type,
        label: s.label,
        productId: s.productId ?? null,
        variantId: s.variantId ?? null,
        position: s.position
      }))
    }
  }) : json10({ error: "Not found" }, { status: 404 });
}
async function action4({ request, params }) {
  let { id } = params;
  if (!id)
    return json10({ error: "Missing id" }, { status: 400 });
  if (request.method === "DELETE")
    return await prisma.build.delete({ where: { id } }).catch(() => null), json10({ ok: !0 });
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json10({ error: "Invalid or missing JSON body" }, { status: 400 });
  }
  let parsed = UpdateSlotsRequestSchema.safeParse(payload);
  if (!parsed.success)
    return json10({ error: "Bad payload", issues: parsed.error.issues }, { status: 400 });
  let desired = parsed.data.slots, existing = await prisma.buildSlot.findMany({
    where: { buildId: id },
    orderBy: { position: "asc" }
  }), byPos = new Map(existing.map((s) => [s.position, s])), desiredPos = new Set(desired.map((s) => s.position)), toDelete = existing.filter((s) => !desiredPos.has(s.position)).map((s) => s.id);
  toDelete.length && await prisma.buildSlot.deleteMany({ where: { id: { in: toDelete } } });
  for (let s of desired) {
    let found = byPos.get(s.position);
    found ? await prisma.buildSlot.update({
      where: { id: found.id },
      data: {
        type: s.type,
        label: s.label,
        productId: s.productId ?? null,
        variantId: s.variantId ?? null
      }
    }) : await prisma.buildSlot.create({
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
  let build = await prisma.build.findUnique({
    where: { id },
    include: { slots: { orderBy: { position: "asc" } } }
  });
  return build ? json10({
    build: {
      id: build.id,
      createdAt: build.createdAt.toISOString(),
      updatedAt: build.updatedAt.toISOString(),
      slots: build.slots.map((s) => ({
        id: s.id,
        type: s.type,
        label: s.label,
        productId: s.productId ?? null,
        variantId: s.variantId ?? null,
        position: s.position
      }))
    }
  }) : json10({ error: "Not found" }, { status: 404 });
}

// app/routes/api.access.ctx.ts
var api_access_ctx_exports = {};
__export(api_access_ctx_exports, {
  loader: () => loader10
});
import { json as json11 } from "@remix-run/node";
async function loader10() {
  return json11(
    { ok: !0, plan: "free", featureFlags: { catalog_v1: !0, builds_v1: !0, checkout_v1: !1 } },
    { headers: { "Cache-Control": "no-store" } }
  );
}

// app/routes/ping.ts
var ping_exports = {};
__export(ping_exports, {
  action: () => action5,
  loader: () => loader11
});
import { json as json12 } from "@remix-run/node";
async function loader11() {
  return json12({ ok: !0, service: "gateway" });
}
async function action5() {
  return json12({ ok: !0, service: "gateway" });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OFXGPWWA.js", imports: ["/build/_shared/chunk-JHHIYDHV.js", "/build/_shared/chunk-O3OPJ2LN.js", "/build/_shared/chunk-AO7FZ56T.js", "/build/_shared/chunk-YBUKXD5O.js", "/build/_shared/chunk-DY665R7U.js", "/build/_shared/chunk-H6IH5AEU.js", "/build/_shared/chunk-4VGT7TYS.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XHQGCKVH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.access.ctx": { id: "routes/api.access.ctx", parentId: "root", path: "api/access/ctx", index: void 0, caseSensitive: void 0, module: "/build/routes/api.access.ctx-E5VV74YD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.access.ctx": { id: "routes/apps.rbp.api.access.ctx", parentId: "root", path: "apps/rbp/api/access/ctx", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.access.ctx-SIDBDE7V.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.builds.$id": { id: "routes/apps.rbp.api.builds.$id", parentId: "root", path: "apps/rbp/api/builds/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.builds.$id-B2N45G3O.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.builds.$id.list": { id: "routes/apps.rbp.api.builds.$id.list", parentId: "routes/apps.rbp.api.builds.$id", path: "list", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.builds.$id.list-MZ3Z7UPP.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.builds._index": { id: "routes/apps.rbp.api.builds._index", parentId: "root", path: "apps/rbp/api/builds", index: !0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.builds._index-KPGLMFFJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.catalog.collections": { id: "routes/apps.rbp.api.catalog.collections", parentId: "root", path: "apps/rbp/api/catalog/collections", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.catalog.collections-FJJUFXVO.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.catalog.products": { id: "routes/apps.rbp.api.catalog.products", parentId: "root", path: "apps/rbp/api/catalog/products", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.catalog.products-JP7H6OCC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.checkout.package": { id: "routes/apps.rbp.api.checkout.package", parentId: "root", path: "apps/rbp/api/checkout/package", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.checkout.package-YS57YXZK.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.api.lists._index": { id: "routes/apps.rbp.api.lists._index", parentId: "root", path: "apps/rbp/api/lists", index: !0, caseSensitive: void 0, module: "/build/routes/apps.rbp.api.lists._index-CNMPT6N3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.modules.$name.$version.index[.]js": { id: "routes/apps.rbp.modules.$name.$version.index[.]js", parentId: "root", path: "apps/rbp/modules/:name/:version/index.js", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.modules.$name.$version.index[.]js-UM5UX5S5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/apps.rbp.modules.registry[.]json": { id: "routes/apps.rbp.modules.registry[.]json", parentId: "root", path: "apps/rbp/modules/registry.json", index: void 0, caseSensitive: void 0, module: "/build/routes/apps.rbp.modules.registry[.]json-YTD2IXLE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ping": { id: "routes/ping", parentId: "root", path: "ping", index: void 0, caseSensitive: void 0, module: "/build/routes/ping-I42ZOY6D.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ecb3e798", hmr: { runtime: "/build/_shared/chunk-AO7FZ56T.js", timestamp: 1755289265991 }, url: "/build/manifest-ECB3E798.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/apps.rbp.modules.$name.$version.index[.]js": {
    id: "routes/apps.rbp.modules.$name.$version.index[.]js",
    parentId: "root",
    path: "apps/rbp/modules/:name/:version/index.js",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_modules_name_version_index_js_exports
  },
  "routes/apps.rbp.api.catalog.collections": {
    id: "routes/apps.rbp.api.catalog.collections",
    parentId: "root",
    path: "apps/rbp/api/catalog/collections",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_api_catalog_collections_exports
  },
  "routes/apps.rbp.modules.registry[.]json": {
    id: "routes/apps.rbp.modules.registry[.]json",
    parentId: "root",
    path: "apps/rbp/modules/registry.json",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_modules_registry_json_exports
  },
  "routes/apps.rbp.api.catalog.products": {
    id: "routes/apps.rbp.api.catalog.products",
    parentId: "root",
    path: "apps/rbp/api/catalog/products",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_api_catalog_products_exports
  },
  "routes/apps.rbp.api.checkout.package": {
    id: "routes/apps.rbp.api.checkout.package",
    parentId: "root",
    path: "apps/rbp/api/checkout/package",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_api_checkout_package_exports
  },
  "routes/apps.rbp.api.builds.$id.list": {
    id: "routes/apps.rbp.api.builds.$id.list",
    parentId: "routes/apps.rbp.api.builds.$id",
    path: "list",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_api_builds_id_list_exports
  },
  "routes/apps.rbp.api.builds._index": {
    id: "routes/apps.rbp.api.builds._index",
    parentId: "root",
    path: "apps/rbp/api/builds",
    index: !0,
    caseSensitive: void 0,
    module: apps_rbp_api_builds_index_exports
  },
  "routes/apps.rbp.api.lists._index": {
    id: "routes/apps.rbp.api.lists._index",
    parentId: "root",
    path: "apps/rbp/api/lists",
    index: !0,
    caseSensitive: void 0,
    module: apps_rbp_api_lists_index_exports
  },
  "routes/apps.rbp.api.access.ctx": {
    id: "routes/apps.rbp.api.access.ctx",
    parentId: "root",
    path: "apps/rbp/api/access/ctx",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_api_access_ctx_exports
  },
  "routes/apps.rbp.api.builds.$id": {
    id: "routes/apps.rbp.api.builds.$id",
    parentId: "root",
    path: "apps/rbp/api/builds/:id",
    index: void 0,
    caseSensitive: void 0,
    module: apps_rbp_api_builds_id_exports
  },
  "routes/api.access.ctx": {
    id: "routes/api.access.ctx",
    parentId: "root",
    path: "api/access/ctx",
    index: void 0,
    caseSensitive: void 0,
    module: api_access_ctx_exports
  },
  "routes/ping": {
    id: "routes/ping",
    parentId: "root",
    path: "ping",
    index: void 0,
    caseSensitive: void 0,
    module: ping_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
