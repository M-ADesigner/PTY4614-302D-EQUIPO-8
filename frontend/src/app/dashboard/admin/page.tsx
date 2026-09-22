import { UsersTable } from "@/components/content/UsersTable";
import {
  articulosEnRevision,
  articulosMock,
  articulosPublicados,
} from "@/lib/content/mock-articulos";
import { usuariosMock } from "@/lib/auth/mock-usuarios";

export default function AdminPage() {
  const stats = [
    { label: "Artículos publicados", valor: articulosPublicados().length },
    { label: "En cola de revisión", valor: articulosEnRevision().length },
    { label: "Usuarios activos", valor: usuariosMock.length },
  ];

  const articulosPorUsuario: Record<string, number> = {};
  for (const articulo of articulosMock) {
    articulosPorUsuario[articulo.autorId] =
      (articulosPorUsuario[articulo.autorId] ?? 0) + 1;
  }

  return (
    <main className="flex flex-col gap-6 px-4 py-8 sm:px-8 sm:py-10 lg:px-16">
      <h1 className="font-heading text-ink text-2xl font-bold">
        Administración
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-border flex flex-col gap-1.5 rounded-xl border p-5"
          >
            <span className="font-heading text-ink text-3xl font-extrabold">
              {stat.valor}
            </span>
            <span className="text-ink/55 text-sm">{stat.label}</span>
          </div>
        ))}
      </div>

      <UsersTable
        usuarios={usuariosMock}
        articulosPorUsuario={articulosPorUsuario}
      />
    </main>
  );
}
