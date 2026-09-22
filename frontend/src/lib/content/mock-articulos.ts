import type { Articulo } from "@/types/content";

// Datos de ejemplo — CCHIA todavía no tiene una fuente real de contenido
// conectada (ver Guion_Entrevista_Cliente_CCHIA, sección "Contenido y
// publicación"). Reemplazar por la fuente real cuando exista.
export const articulosMock: Articulo[] = [
  {
    id: "a1",
    titulo: "IA en la minería: cinco proyectos chilenos a seguir",
    categoria: "Boletín",
    resumen:
      "Cómo empresas del norte están usando visión computacional y mantenimiento predictivo.",
    contenido: "",
    estado: "publicado",
    autorId: "u2",
    actualizadoEn: "Hace 3 días",
    publicadoEn: "Hace 3 días",
  },
  {
    id: "a2",
    titulo: "CCHIA en ETM Day 2025: la IA como motor del emprendimiento",
    categoria: "Noticia institucional",
    resumen:
      "Resumen de la participación de la cámara destacando el rol de la IA en el país.",
    contenido: "",
    estado: "publicado",
    autorId: "u2",
    actualizadoEn: "Hace 1 semana",
    publicadoEn: "Hace 1 semana",
  },
  {
    id: "a3",
    titulo: "Guía práctica: adopción responsable de IA para pymes",
    categoria: "Artículo",
    resumen:
      "Recomendaciones iniciales para pequeñas empresas que evalúan sumar IA a su operación.",
    contenido: "",
    estado: "publicado",
    autorId: "u1",
    actualizadoEn: "Hace 2 semanas",
    publicadoEn: "Hace 2 semanas",
  },
  {
    id: "a4",
    titulo: "Boletín de septiembre: hitos del ecosistema IA",
    categoria: "Boletín",
    resumen: "Resumen mensual de novedades del ecosistema de IA en Chile.",
    contenido: "",
    estado: "en_revision",
    autorId: "u2",
    actualizadoEn: "Hace 4 horas",
  },
  {
    id: "a5",
    titulo: "Ética de IA en el sector salud",
    categoria: "Artículo",
    resumen: "Reflexiones sobre el uso responsable de IA en salud en Chile.",
    contenido: "",
    estado: "en_revision",
    autorId: "u1",
    actualizadoEn: "Hace 1 día",
  },
  {
    id: "a6",
    titulo: "Entrevista con la Comisión OpenSource LATAM",
    categoria: "Artículo",
    resumen:
      "Conversación sobre software abierto y colaboración regional en IA.",
    contenido: "",
    estado: "asistido_ia",
    autorId: "u1",
    actualizadoEn: "Hoy, 09:12",
  },
  {
    id: "a7",
    titulo: "Próximos eventos CCHIA Co-Lab",
    categoria: "Boletín",
    resumen: "Calendario de encuentros y talleres del próximo trimestre.",
    contenido: "",
    estado: "borrador",
    autorId: "u1",
    actualizadoEn: "Ayer",
  },
];

export function articulosPublicados(): Articulo[] {
  return articulosMock.filter((articulo) => articulo.estado === "publicado");
}

export function articulosEnRevision(): Articulo[] {
  return articulosMock.filter((articulo) => articulo.estado === "en_revision");
}

export function articuloPorSlug(slug: string): Articulo | undefined {
  return articulosMock.find((articulo) => articulo.id === slug);
}
