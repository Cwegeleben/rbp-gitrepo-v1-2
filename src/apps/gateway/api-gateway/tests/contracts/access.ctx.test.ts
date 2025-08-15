import { describe, it, expect } from "vitest";
import { TenantContextSchema } from "../../../../shared/sdk/types";

const BASE = process.env.RBP_API_BASE || "http://localhost:3000/apps/rbp/api";

describe("contracts: /access/ctx", () => {
  it("returns a valid TenantContext", async () => {
    const res = await fetch(`${BASE}/access/ctx`);
    expect(res.ok).toBe(true);
    const data = await res.json();
    const parsed = TenantContextSchema.parse(data);
    expect(parsed.tenant.domain).toBeDefined();
  });
});
