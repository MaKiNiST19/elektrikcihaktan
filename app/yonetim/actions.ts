"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE = "yonetim_auth";

export async function login(formData: FormData) {
  const pwd = String(formData.get("password") ?? "");
  if (pwd && pwd === process.env.ADMIN_PASSWORD) {
    const c = await cookies();
    c.set(COOKIE, "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/yonetim",
      maxAge: 60 * 60 * 12,
    });
    redirect("/yonetim");
  }
  redirect("/yonetim?e=1");
}

export async function logout() {
  const c = await cookies();
  c.delete(COOKIE);
  redirect("/yonetim");
}

export async function isAuthed() {
  const c = await cookies();
  return c.get(COOKIE)?.value === "1";
}
