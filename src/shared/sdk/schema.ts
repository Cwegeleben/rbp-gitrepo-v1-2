import { z } from "zod";

export const FlagsSchema = z.record(z.string(), z.unknown());

export const TenantSchema = z.object({
  id: z.number().int(),
  domain: z.string().min(3),
  plan: z.string().min(1),
  flags: FlagsSchema
});
export type Tenant = z.infer<typeof TenantSchema>;

export const TenantContextSchema = z.object({
  tenant: TenantSchema,
  now: z.string().datetime()
});
export type TenantContext = z.infer<typeof TenantContextSchema>;

export const CollectionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1)
});
export type Collection = z.infer<typeof CollectionSchema>;

export const ProductSchema = z.object({
  id: z.string().min(1),
  collectionId: z.string().min(1),
  name: z.string().min(1),
  priceCents: z.number().int().nonnegative()
});
export type Product = z.infer<typeof ProductSchema>;

export const CollectionsResponseSchema = z.object({
  items: z.array(CollectionSchema)
});
export type CollectionsResponse = z.infer<typeof CollectionsResponseSchema>;

export const ProductsResponseSchema = z.object({
  items: z.array(ProductSchema)
});
export type ProductsResponse = z.infer<typeof ProductsResponseSchema>;
