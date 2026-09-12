import { notFound } from "next/navigation";
import { articuloPorSlug } from "@/lib/content/mock-articulos";

export default async function ArticuloPage(
  props: PageProps<"/articulos/[slug]">,
) {
  const { slug } = await props.params;
  const articulo = articuloPorSlug(slug);

  if (!articulo) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-4 py-10 sm:px-8 sm:py-16 lg:px-16">
      <span className="text-xs font-bold tracking-wide text-[#5C7A12] uppercase">
        {articulo.categoria}
      </span>
      <h1 className="text-ink text-[32px] leading-tight font-extrabold lg:text-[38px]">
        {articulo.titulo}
      </h1>
      <p className="text-ink/45 text-xs">{articulo.publicadoEn}</p>
      <p className="text-ink/70 text-base leading-relaxed">
        {articulo.resumen}
      </p>
    </main>
  );
}
