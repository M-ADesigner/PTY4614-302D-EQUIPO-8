// Interfaz aislada del proveedor de IA: el proveedor real (y qué tareas debe
// cubrir) todavía no se define con el cliente (ver Guion_Entrevista_Cliente_CCHIA,
// sección "Uso esperado de la Inteligencia Artificial"). Mantener el resto del
// código dependiendo solo de esta interfaz para poder cambiar de proveedor sin
// tocar el flujo editorial.
export interface AsistenteIA {
  generarBorrador(notas: string): Promise<string>;
  resumir(texto: string): Promise<string>;
  corregirEstilo(texto: string): Promise<string>;
}

export const asistenteIA: AsistenteIA = {
  async generarBorrador() {
    throw new Error("Proveedor de IA no configurado todavía.");
  },
  async resumir() {
    throw new Error("Proveedor de IA no configurado todavía.");
  },
  async corregirEstilo() {
    throw new Error("Proveedor de IA no configurado todavía.");
  },
};
