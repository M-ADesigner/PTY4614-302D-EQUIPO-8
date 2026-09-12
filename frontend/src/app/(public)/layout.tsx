import Image from "next/image";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";

const HAZTE_SOCIO_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdRNGNM10IHgnvAnfOl75xvsgVm1hqwepqN-uqEy4ZjFOiQEg/viewform?usp=send_form";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <header className="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 lg:px-16">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/Logo_CCHIA.png"
            alt="Logo Cámara Chilena de Inteligencia Artificial"
            width={135}
            height={56}
            className="h-10 w-auto object-contain sm:h-14"
            priority
          />
        </Link>
        <a
          href={HAZTE_SOCIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses(
            "primary",
            "px-4 py-2 text-xs sm:px-6 sm:text-sm",
          )}
        >
          Hazte Socio
        </a>
      </header>

      {children}

      <footer className="border-border text-ink/60 border-t px-4 py-6 text-center text-sm sm:px-8 sm:text-left lg:px-16">
        © 2026 Cámara Chilena de Inteligencia Artificial
      </footer>
    </div>
  );
}
