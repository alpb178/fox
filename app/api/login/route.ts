import { NextResponse } from "next/server";
import { setToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (email === "admin@admin.com" && password === "admin") {
    setToken("token");
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
