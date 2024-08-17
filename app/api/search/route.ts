import prisma from "@/lib/prisma";
import { validateRequest } from "@/auth";

export async function GET(request: Request) {
  try {
    const { user: loggedInUser } = await validateRequest();
    // if (!loggedInUser) {
    //   return new Response(JSON.stringify({ error: "Unauthorized" }), {
    //     status: 401,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }

    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("query") || "";


    const todos = await prisma.todos.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchQuery,
            },
          },
          {
            description: {
              contains: searchQuery,
            },
          },
        ],
      },
    });

    return new Response(JSON.stringify(todos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
