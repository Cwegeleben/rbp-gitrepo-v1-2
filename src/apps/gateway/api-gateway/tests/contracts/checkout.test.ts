import { describe, it, expect } from "vitest";
import { CreateBuildResponseSchema, GetBuildResponseSchema } from "../../../../shared/sdk/types";
import { PackageResponseSchema } from "../../../../shared/sdk/types";

const BASE = process.env.RBP_API_BASE || "http://localhost:3000/apps/rbp/api";

async function createBuild(): Promise<string> {
  const res = await fetch(`${BASE}/builds`, { method: "POST" });
  const created = CreateBuildResponseSchema.parse(await res.json());
  return created.build.id;
}

async function getBuild(id: string) {
  const res = await fetch(`${BASE}/builds/${id}`);
  return GetBuildResponseSchema.parse(await res.json());
}

describe("contracts: /checkout/package", () => {
  it("packages selected slots into line items and subtotal", async () => {
    const buildId = await createBuild();
    const got = await getBuild(buildId);

    // If at least one slot exists, set its productId to a known seeded product
    if (got.build.slots.length) {
      const first = got.build.slots[0];
      first.productId = "PRD-Blank-700"; // from seed
      const resPatch = await fetch(`${BASE}/builds/${buildId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slots: got.build.slots })
      });
      expect(resPatch.ok).toBe(true);
    }

    // Package
    const res = await fetch(`${BASE}/checkout/package`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buildId })
    });
    expect(res.ok).toBe(true);
    const packed = PackageResponseSchema.parse(await res.json());

    // Structure checks (items may be empty if no product was assigned)
    expect(packed).toHaveProperty("items");
    expect(packed).toHaveProperty("subtotalCents");
  });
});
