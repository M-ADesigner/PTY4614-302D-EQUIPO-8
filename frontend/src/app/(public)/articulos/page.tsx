import { ArticleCard } from "@/components/content/ArticleCard";
import { articulosPublicados } from "@/lib/content/mock-articulos";

export default function ArticulosPage() {
  const articulos = articulosPublicados();

  return (
    <main className="flex flex-col gap-6 px-4 py-10 sm:gap-8 sm:px-8 sm:py-16 lg:px-16">
      <h1 className="text-ink text-[32px] font-extrabold lg:text-[38px]">
        Artículos
      </h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {articulos.map((articulo) => (
          <ArticleCard key={articulo.id} articulo={articulo} />
        ))}
      </div>
    </main>
  );
}
