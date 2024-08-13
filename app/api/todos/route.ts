import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { user: loggedInUser } = await validateRequest();

    if (!loggedInUser) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const todos = await prisma.todos.findMany({
      where: {
        userId: loggedInUser?.id,
      },
    });

    return new Response(JSON.stringify(todos), {
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

export async function POST(request: Request) {
  try {
    const body = request.json;
    console.log("body", body);
    return new Response(JSON.stringify({ name: "tanyasc dc" }));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
