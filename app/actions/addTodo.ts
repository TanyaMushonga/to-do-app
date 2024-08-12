"use server";
import { todoSchema, todoValues } from "@/lib/validationSchema";
import prisma from "@/lib/prisma";
import { validateRequest } from "@/auth";

export const addTodo = async (values: todoValues) => {
  try {
    const validatedValues = todoSchema.parse(values);
    const { user } = await validateRequest();
    if (!user) throw new Error("unauthorized");

    const todo = await prisma.todos.create({
      data: {
        ...validatedValues,
        userId: user.id,
      },
    });
    return {
      messsage: "Todo added successfully",
      data: todo,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to add todo");
  }
};
