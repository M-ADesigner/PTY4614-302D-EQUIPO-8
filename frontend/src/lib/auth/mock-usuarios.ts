import type { Usuario } from "@/types/user";

// Datos de ejemplo — no hay autenticación real todavía (ver
// Guion_Entrevista_Cliente_CCHIA, sección "Roles y usuarios").
export const usuariosMock: Usuario[] = [
  {
    id: "u1",
    nombre: "María Fernández",
    correo: "maria.fernandez@cchia.cl",
    rol: "editor",
    miembroDesde: "Marzo 2026",
  },
  {
    id: "u2",
    nombre: "Diego Rojas",
    correo: "diego.rojas@cchia.cl",
    rol: "editor",
    miembroDesde: "Abril 2026",
  },
  {
    id: "u3",
    nombre: "Javiera Soto",
    correo: "javiera.soto@cchia.cl",
    rol: "revisor",
    miembroDesde: "Junio 2026",
  },
];

export function usuarioPorId(id: string): Usuario | undefined {
  return usuariosMock.find((usuario) => usuario.id === id);
}
