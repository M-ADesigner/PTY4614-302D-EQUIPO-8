import type { EstadoContenido } from "@/types/content";

const ESTADOS: Record<EstadoContenido, { label: string; className: string }> = {
  borrador: { label: "Borrador", className: "bg-[#ECEFE6] text-[#74766D]" },
  asistido_ia: {
    label: "Asistido por IA",
    className: "bg-primary/28 text-[#4A5F0E]",
  },
  en_revision: {
    label: "En revisión",
    className: "bg-navy-700/12 text-navy-700",
  },
  aprobado: { label: "Aprobado", className: "bg-[#E4F1E6] text-[#3F7D4B]" },
  publicado: {
    label: "Publicado",
    className: "bg-navy-900/10 text-navy-900",
  },
};

export function EstadoBadge({ estado }: { estado: EstadoContenido }) {
  const { label, className } = ESTADOS[estado];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
}
