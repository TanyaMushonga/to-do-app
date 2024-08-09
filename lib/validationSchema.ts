import { z } from "zod";

const requiredString = z.string().nonempty({ message: "required" });

export const loginSchema = z.object({
  username: requiredString,
  email: requiredString.email({ message: "invalid email" }),
  password: requiredString.min(8, {
    message: "password must be at least 8 characters",
  }),
});

export type loginValues = z.infer<typeof loginSchema>;
