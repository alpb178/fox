import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@admin.com" && password === "admin") {
    const response = NextResponse.json({ ok: true });

    response.cookies.set("token", "token", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
