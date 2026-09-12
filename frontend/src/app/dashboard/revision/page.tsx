import { RevisionList } from "@/components/content/RevisionList";
import { articulosEnRevision } from "@/lib/content/mock-articulos";
import { usuariosMock } from "@/lib/auth/mock-usuarios";

export default function RevisionPage() {
  const pendientes = articulosEnRevision();
  const usuariosPorId = Object.fromEntries(
    usuariosMock.map((usuario) => [usuario.id, usuario]),
  );

  return (
    <main className="flex flex-col gap-6 px-4 py-8 sm:px-8 sm:py-10 lg:px-16">
      <div className="flex items-baseline justify-between">
        <h1 className="font-heading text-ink text-2xl font-bold">
          Cola de revisión
        </h1>
        <span className="text-ink/55 text-sm">
          {pendientes.length} pendientes
        </span>
      </div>

      <RevisionList pendientes={pendientes} usuariosPorId={usuariosPorId} />
    </main>
  );
}
