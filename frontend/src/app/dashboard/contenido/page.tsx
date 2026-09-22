import { Button } from "@/components/ui/Button";
import { ContenidoTable } from "@/components/content/ContenidoTable";
import { articulosMock } from "@/lib/content/mock-articulos";
import { usuariosMock } from "@/lib/auth/mock-usuarios";

export default function ContenidoPage() {
  const usuariosPorId = Object.fromEntries(
    usuariosMock.map((usuario) => [usuario.id, usuario]),
  );

  return (
    <main className="flex flex-col gap-6 px-4 py-8 sm:px-8 sm:py-10 lg:px-16">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-heading text-ink text-2xl font-bold">
          Mi contenido
        </h1>
        <Button>+ Nuevo artículo con IA</Button>
      </div>

      <div className="bg-primary/8 flex flex-col items-start gap-4 rounded-xl border border-dashed border-[#B6C98F] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-bold tracking-wide text-[#5C7A12] uppercase">
            Sugerencia del asistente
          </p>
          <p className="text-ink text-sm">
            Resumir el boletín de minería en 150 palabras para redes sociales.
          </p>
        </div>
        <Button variant="outline" className="shrink-0">
          Generar
        </Button>
      </div>

      <ContenidoTable articulos={articulosMock} usuariosPorId={usuariosPorId} />
    </main>
  );
}
