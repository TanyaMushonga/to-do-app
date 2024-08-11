"use server";

import prisma from "@/lib/prisma";
import { signupSchema, signupValues } from "@/lib/validationSchema";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

export async function signUp(
  credentials: signupValues
): Promise<{ error: string }> {
  try {
    const { username, email, password } = signupSchema.parse(credentials);

    const existingUsername = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
        },
      },
    });

    if (existingUsername) {
      return { error: "Username already exists" };
    }

    const existingEmail = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (existingEmail) {
      return { error: "Email already exists" };
    }

    await prisma.user.create({
      data: {
        id: "some-idd",
        username,
        email,
        passwordHash: password,
      },
    });

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return { error: "An error occurred" };
  }
}
