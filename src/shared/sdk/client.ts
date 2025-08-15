import {
  TenantContextSchema,
  CollectionsResponseSchema,
  ProductsResponseSchema,
  CreateBuildResponseSchema,
  GetBuildResponseSchema,
  UpdateSlotsRequestSchema,
  UpdateSlotsResponseSchema,
  ListsResponseSchema,
  SaveToListRequestSchema,
  SaveToListResponseSchema,
  PackageRequestSchema,
  PackageResponseSchema,
  type TenantContext,
  type CollectionsResponse,
  type ProductsResponse,
  type UpdateSlotsRequest,
  type PackageResponse
} from "./types";

const BASE =
  (typeof window !== "undefined" && (window as any).__RBP_API_BASE__) ||
  process.env.RBP_API_BASE ||
  "/apps/rbp/api";

async function j<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}

export const sdk = {
  async getCtx(): Promise<TenantContext> {
    const res = await fetch(`${BASE}/access/ctx`);
    const data = await j<unknown>(res);
    return TenantContextSchema.parse(data);
  },
  async getCollections(): Promise<CollectionsResponse> {
    const res = await fetch(`${BASE}/catalog/collections`);
    const data = await j<unknown>(res);
    return CollectionsResponseSchema.parse(data);
  },
  async getProductsByCollection(collectionId: string): Promise<ProductsResponse> {
    const res = await fetch(`${BASE}/catalog/products?collection=${encodeURIComponent(collectionId)}`);
    const data = await j<unknown>(res);
    return ProductsResponseSchema.parse(data);
  }
};

export const builds = {
  async create(): Promise<import("./types").CreateBuildResponse> {
    const res = await fetch(`${BASE}/builds`, { method: "POST" });
    const data = await j<unknown>(res);
    return CreateBuildResponseSchema.parse(data);
  },
  async get(id: string): Promise<import("./types").GetBuildResponse> {
    const res = await fetch(`${BASE}/builds/${encodeURIComponent(id)}`);
    const data = await j<unknown>(res);
    return GetBuildResponseSchema.parse(data);
  },
  async updateSlots(id: string, body: UpdateSlotsRequest): Promise<import("./types").UpdateSlotsResponse> {
    const payload = UpdateSlotsRequestSchema.parse(body);
    const res = await fetch(`${BASE}/builds/${encodeURIComponent(id)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await j<unknown>(res);
    return UpdateSlotsResponseSchema.parse(data);
  },
  async destroy(id: string): Promise<{ ok: true }> {
    const res = await fetch(`${BASE}/builds/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete build");
    return { ok: true };
  },
  async saveToList(id: string, name: string): Promise<import("./types").SaveToListResponse> {
    const payload = SaveToListRequestSchema.parse({ name });
    const res = await fetch(`${BASE}/builds/${encodeURIComponent(id)}/list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await j<unknown>(res);
    return SaveToListResponseSchema.parse(data);
  },
  async lists(): Promise<import("./types").ListsResponse> {
    const res = await fetch(`${BASE}/lists`);
    const data = await j<unknown>(res);
    return ListsResponseSchema.parse(data);
  }
};

export const checkout = {
  async package(req: unknown): Promise<PackageResponse> {
    const body = PackageRequestSchema.parse(req);
    const res = await fetch(`${BASE}/checkout/package`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const data = await j<unknown>(res);
    return PackageResponseSchema.parse(data);
  }
};
