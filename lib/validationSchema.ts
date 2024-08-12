import { z } from "zod";

const requiredString = z.string().trim().min(1, "Required");

export const signupSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, - and _ allowed"
  ),
  password: requiredString.min(8, "Must be at least 8 characters"),
});

export type signupValues = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type loginValues = z.infer<typeof loginSchema>;

export const todoSchema = z.object({
  title: requiredString,
  priority: z.enum(["Low", "Medium", "High"], {
    required_error: "Priority is required",
  }),
  category: z.enum(["Personal", "Work", "Finance", "Others"], {
    required_error: "Category is required",
  }),
  description: requiredString,
  duedate: z.date({
    required_error: "Due date is required.",
  }),
});

export type todoValues = z.infer<typeof todoSchema>;
