import prisma from "@/lib/prisma";
import { validateRequest } from "@/auth";

export async function DELETE(request: Request) {
  try {
    const { user: loggedInUser } = await validateRequest();
    // if (!loggedInUser) {
    //   return new Response(JSON.stringify({ error: "Unauthorized" }), {
    //     status: 401,
    //   });
    // }

    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id || typeof id !== "string") {
      return new Response(JSON.stringify({ error: "Invalid Request" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const todo = await prisma.todos.findFirst({
      where: {
        id: id,
        userId: loggedInUser?.id,
      },
    });

    if (!todo) {
      return new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.todos.delete({
      where: {
        id: id,
      },
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
