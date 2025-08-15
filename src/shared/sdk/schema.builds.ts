import { z } from "zod";

export const SlotSchema = z.object({
  id: z.string().optional(),
  type: z.string().min(1),
  label: z.string().min(1),
  productId: z.string().nullable().optional(),
  variantId: z.string().nullable().optional(),
  position: z.number().int().nonnegative()
});
export type Slot = z.infer<typeof SlotSchema>;

export const BuildSchema = z.object({
  id: z.string(),
  slots: z.array(SlotSchema),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});
export type Build = z.infer<typeof BuildSchema>;

export const CreateBuildResponseSchema = z.object({
  build: BuildSchema
});
export type CreateBuildResponse = z.infer<typeof CreateBuildResponseSchema>;

export const GetBuildResponseSchema = z.object({
  build: BuildSchema
});
export type GetBuildResponse = z.infer<typeof GetBuildResponseSchema>;

export const UpdateSlotsRequestSchema = z.object({
  slots: z.array(SlotSchema) // full desired state; server will upsert/reorder
});
export type UpdateSlotsRequest = z.infer<typeof UpdateSlotsRequestSchema>;

export const UpdateSlotsResponseSchema = z.object({
  build: BuildSchema
});
export type UpdateSlotsResponse = z.infer<typeof UpdateSlotsResponseSchema>;

export const ListSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string().datetime()
});
export type List = z.infer<typeof ListSchema>;

export const ListsResponseSchema = z.object({
  items: z.array(ListSchema)
});
export type ListsResponse = z.infer<typeof ListsResponseSchema>;

export const SaveToListRequestSchema = z.object({
  name: z.string().min(1)
});
export type SaveToListRequest = z.infer<typeof SaveToListRequestSchema>;

export const SaveToListResponseSchema = z.object({
  list: ListSchema,
  buildId: z.string()
});
export type SaveToListResponse = z.infer<typeof SaveToListResponseSchema>;
