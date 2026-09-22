"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/dashboard/contenido", label: "Contenido" },
  { href: "/dashboard/revision", label: "Revisión" },
  { href: "/dashboard/admin", label: "Administración" },
];

// Sin autenticación todavía: falta definir con el cliente quién ocupa cada
// rol (ver Guion_Entrevista_Cliente_CCHIA, sección "Roles y usuarios").
export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col bg-white">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
        <div className="flex items-baseline gap-2.5">
          <Image
            src="/images/Logo_CCHIA.png"
            alt="Logo CCHIA"
            width={87}
            height={36}
            className="h-9 w-auto object-contain"
          />
          <span className="text-ink/50 text-sm">Panel interno</span>
        </div>

        <a
          href="/api/auth/logout"
          className="border-border-btn text-ink hover:bg-primary/10 rounded-full border px-4 py-1.5 text-sm font-medium transition"
        >
          Cerrar sesión
        </a>
      </div>

      <nav className="border-border text-ink/55 flex gap-5 overflow-x-auto border-b px-4 text-sm whitespace-nowrap sm:gap-8 sm:px-8 lg:px-16">
        {NAV_ITEMS.map((item) => {
          const current = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                current
                  ? "border-primary text-ink border-b-2 py-4 font-semibold"
                  : "border-b-2 border-transparent py-4"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {children}
    </div>
  );
}
