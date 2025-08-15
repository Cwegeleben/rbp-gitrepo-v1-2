import {
  TenantContextSchema,
  CollectionsResponseSchema,
  ProductsResponseSchema,
  type TenantContext,
  type CollectionsResponse,
  type ProductsResponse
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
