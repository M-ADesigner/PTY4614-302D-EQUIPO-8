import type { EstadoContenido } from "@/types/content";

// Orden y transiciones válidas del flujo editorial (ver README del proyecto).
// Pendiente de confirmar con el cliente si se requiere más de un nivel de
// revisión (ver Guion_Entrevista_Cliente_CCHIA).
const TRANSICIONES_VALIDAS: Record<EstadoContenido, EstadoContenido[]> = {
  borrador: ["asistido_ia", "en_revision"],
  asistido_ia: ["en_revision", "borrador"],
  en_revision: ["aprobado", "borrador"],
  aprobado: ["publicado", "en_revision"],
  publicado: [],
};

export function puedeTransicionar(
  desde: EstadoContenido,
  hacia: EstadoContenido,
): boolean {
  return TRANSICIONES_VALIDAS[desde].includes(hacia);
}
