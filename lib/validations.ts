import { z } from "zod";





const requiredString = z.string().min(3, "Required");

const numericString = z
  .string()
  .regex(/^\d+$/, "Must be a number")
  .max(9, "Number must be less than 9 digits")
  .optional();

const ImageSchema = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Only Images Allowed",
  )
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must be less than 2MB");



export const programmesSchema = z.object({
  title: requiredString,
  banner: ImageSchema,
  intro: requiredString,
  description: z.string().optional(),
  status: requiredString,
  group: requiredString
});



export type ProgrammesValues = z.infer<typeof programmesSchema>;

