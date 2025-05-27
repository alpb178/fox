import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (email === "admin@admin.com" && password === "admin") {
      const response = NextResponse.json({ ok: true });

      response.cookies.set("token", "my-token", {
        path: "/",
        maxAge: 60 * 60 * 24,
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      return response;
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }
}
