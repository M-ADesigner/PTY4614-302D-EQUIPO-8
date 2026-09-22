import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import { ArticleCard } from "@/components/content/ArticleCard";
import { articulosPublicados } from "@/lib/content/mock-articulos";

const BENEFICIOS = [
  "Acceso a eventos exclusivos",
  "Networking con expertos",
  "Recursos y capacitaciones",
];

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.3 13.8L14.7 8.4C15.1 8.1 15.1 7.6 14.7 7.2C14.4 6.9 13.9 6.9 13.5 7.2L8.7 12L6.5 9.8C6.1 9.5 5.6 9.5 5.3 9.8C4.9 10.1 4.9 10.6 5.3 11L8.1 13.8C8.3 13.9 8.5 14 8.7 14C8.9 14 9.1 13.9 9.3 13.8Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default function Home() {
  const articulos = articulosPublicados();

  return (
    <>
      <section
        className="flex flex-col items-center gap-6 px-4 py-10 text-center sm:gap-7 sm:px-8 sm:py-14 lg:px-16"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #1A365D 0%, #1A365D 30%, #2B77AD 100%)",
        }}
      >
        <p className="text-sm font-medium tracking-wide text-white uppercase">
          Cámara Chilena de Inteligencia Artificial
        </p>
        <h1 className="text-wrap-balance max-w-3xl text-4xl leading-tight font-bold text-white xl:text-[64px] xl:leading-[1.33]">
          Impulsando la Inteligencia Artificial en Chile.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-white">
          Únete a la organización líder en IA de Chile. Conecta, innova y
          transforma el futuro con nosotros.
        </p>
        <div className="flex gap-4">
          <Link href="/request-info" className={buttonClasses("primary")}>
            Contáctanos
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRNGNM10IHgnvAnfOl75xvsgVm1hqwepqN-uqEy4ZjFOiQEg/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("outline")}
          >
            Hazte Socio
          </a>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {BENEFICIOS.map((beneficio) => (
            <div key={beneficio} className="flex items-center gap-2.5">
              <span className="bg-primary flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                <CheckIcon />
              </span>
              <span className="text-sm text-white">{beneficio}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 px-4 py-14 sm:gap-10 sm:px-8 sm:py-20 lg:px-16">
        <h2 className="text-ink text-center text-[32px] font-extrabold lg:text-[38px]">
          Últimos artículos
        </h2>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articulos.map((articulo) => (
            <ArticleCard key={articulo.id} articulo={articulo} />
          ))}
        </div>
      </section>
    </>
  );
}
