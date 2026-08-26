"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return null;

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <nav className="admin-nav">
      <Link href="/admin/research">Arvexo Admin</Link>
      <button type="button" onClick={handleLogout}>Sign out</button>
    </nav>
  );
}
