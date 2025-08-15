import { describe, it, expect } from "vitest";
import {
  CreateBuildResponseSchema,
  GetBuildResponseSchema,
  UpdateSlotsResponseSchema,
  ListsResponseSchema,
  SaveToListResponseSchema
} from "../../../../shared/sdk/types";

const BASE = process.env.RBP_API_BASE || "http://localhost:3000/apps/rbp/api";

describe("contracts: /builds", () => {
  it("create → update slots → save to list → fetch lists", async () => {
    // create
    let res = await fetch(`${BASE}/builds`, { method: "POST" });
    expect(res.ok).toBe(true);
    const created = CreateBuildResponseSchema.parse(await res.json());
    const id = created.build.id;

    // fetch
    res = await fetch(`${BASE}/builds/${id}`);
    expect(res.ok).toBe(true);
    const got = GetBuildResponseSchema.parse(await res.json());
    expect(got.build.id).toBe(id);

    // update slots (relabel first slot if exists)
    const slots = got.build.slots.map((s, idx) => ({
      ...s,
      label: idx === 0 ? s.label + " (edited)" : s.label
    }));
    res = await fetch(`${BASE}/builds/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slots })
    });
    expect(res.ok).toBe(true);
    const updated = UpdateSlotsResponseSchema.parse(await res.json());
    expect(updated.build.slots.length).toBe(slots.length);

    // save to list
    res = await fetch(`${BASE}/builds/${id}/list`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "My First List" })
    });
    expect(res.ok).toBe(true);
    const saved = SaveToListResponseSchema.parse(await res.json());
    expect(saved.buildId).toBe(id);

    // lists
    res = await fetch(`${BASE}/lists`);
    expect(res.ok).toBe(true);
    const lists = ListsResponseSchema.parse(await res.json());
    expect(Array.isArray(lists.items)).toBe(true);
  });
});
