import { describe, it, expect } from "vitest";
import { CollectionsResponseSchema, ProductsResponseSchema } from "../../../../shared/sdk/types";

const BASE = process.env.RBP_API_BASE || "http://localhost:3000/apps/rbp/api";

describe("contracts: /catalog/*", () => {
  it("returns collections", async () => {
    const res = await fetch(`${BASE}/catalog/collections`);
    expect(res.ok).toBe(true);
    const data = await res.json();
    const parsed = CollectionsResponseSchema.parse(data);
    expect(Array.isArray(parsed.items)).toBe(true);
  });

  it("returns products for first collection (if present)", async () => {
    const colRes = await fetch(`${BASE}/catalog/collections`);
    if (!colRes.ok) return; // skip if server not up
    const cols = CollectionsResponseSchema.parse(await colRes.json());
    if (!cols.items.length) return; // nothing to test
    const first = cols.items[0];
    const prodRes = await fetch(`${BASE}/catalog/products?collection=${encodeURIComponent(first.id)}`);
    expect(prodRes.ok).toBe(true);
    const parsed = ProductsResponseSchema.parse(await prodRes.json());
    // Allowed to be empty; schema validates structure
    expect(parsed.items).toBeDefined();
  });
});
