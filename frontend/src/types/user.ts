export type Rol = "administrador" | "editor" | "revisor";

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  rol: Rol;
  miembroDesde: string;
}
