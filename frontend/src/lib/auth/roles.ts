import type { Rol } from "@/types/user";

const PERMISOS_POR_ROL: Record<Rol, string[]> = {
  administrador: [
    "gestionar_usuarios",
    "gestionar_contenido",
    "revisar",
    "publicar",
  ],
  editor: ["gestionar_contenido"],
  revisor: ["revisar"],
};

export function tienePermiso(rol: Rol, permiso: string): boolean {
  return PERMISOS_POR_ROL[rol].includes(permiso);
}
