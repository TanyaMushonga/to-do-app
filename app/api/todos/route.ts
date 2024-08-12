export async function GET(request: Request) {
  try {
    const responseBody = {
      message: "Hello world",
    };

    return new Response(JSON.stringify(responseBody));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = request.json;
    console.log("body", body)
    return new Response(JSON.stringify({"name": "tanyasc dc"}))
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
