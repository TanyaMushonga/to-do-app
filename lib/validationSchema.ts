import { z } from "zod";

const requiredString = z.string().nonempty({ message: "required" });

export const loginSchema = z.object({
  email: requiredString,
  password: requiredString,
});

export type loginValues = z.infer<typeof loginSchema>;
