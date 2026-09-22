import Link from "next/link";
import type { Articulo } from "@/types/content";

export function ArticleCard({ articulo }: { articulo: Articulo }) {
  return (
    <article className="border-border flex flex-col gap-2.5 rounded-xl border p-6">
      <span className="text-xs font-bold tracking-wide text-[#5C7A12] uppercase">
        {articulo.categoria}
      </span>
      <h3 className="font-heading text-ink text-base leading-snug font-bold">
        {articulo.titulo}
      </h3>
      <p className="text-ink/65 text-sm leading-relaxed">{articulo.resumen}</p>
      <div className="text-ink/45 mt-2 flex justify-between text-xs">
        <span>{articulo.publicadoEn}</span>
        <Link
          href={`/articulos/${articulo.id}`}
          className="text-navy-700 font-semibold"
        >
          Leer más →
        </Link>
      </div>
    </article>
  );
}
