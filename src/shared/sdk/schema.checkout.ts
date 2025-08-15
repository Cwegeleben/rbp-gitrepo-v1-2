import { z } from "zod";

export const PackageRequestSchema = z.object({
  buildId: z.string().min(1),
  quantityMap: z.record(z.string(), z.number().int().positive()).optional() // productId -> qty
});
export type PackageRequest = z.infer<typeof PackageRequestSchema>;

export const LineItemSchema = z.object({
  productId: z.string().min(1),
  name: z.string().min(1),
  priceCents: z.number().int().nonnegative(),
  quantity: z.number().int().positive()
});
export type LineItem = z.infer<typeof LineItemSchema>;

export const PackageResponseSchema = z.object({
  items: z.array(LineItemSchema),
  subtotalCents: z.number().int().nonnegative()
});
export type PackageResponse = z.infer<typeof PackageResponseSchema>;
