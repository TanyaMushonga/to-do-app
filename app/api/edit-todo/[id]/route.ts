import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";

export async function PATCH(request: Request) {
  try {
    const { user: loggedInUser } = await validateRequest();

    if (!loggedInUser) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    if (!id || typeof id !== "string") {
      return new Response(JSON.stringify({ error: "Invalid Request" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid Request bodyyy" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    const { completed } = body;

    if (typeof completed !== "boolean") {
      return new Response(
        JSON.stringify({ error: "Invalid Request expecting a boolean" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
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

    await prisma.todos.update({
      where: {
        id: id,
      },
      data: {
        completed: completed,
      },
    });

    return new Response(
      JSON.stringify({ message: "Task has been completed" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
