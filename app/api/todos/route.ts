import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { user: loggedInUser } = await validateRequest();

    if (!loggedInUser) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const url = new URL(request.url);
    const cursor = url.searchParams.get("cursor") || undefined;
    const pageSize = 5;
    await new Promise((r) => setTimeout(r, 2000));

    const todos = await prisma.todos.findMany({
      where: {
        userId: loggedInUser?.id,
      },
      orderBy: { createdAt: "desc" },
      cursor: cursor ? { id: cursor } : undefined,
      take: pageSize + 1,
    });

    const nextCursor = todos.length > pageSize ? todos[pageSize].id : null;

    const data = {
      todos: todos.slice(0, pageSize),
      nextCursor,
    };

    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
