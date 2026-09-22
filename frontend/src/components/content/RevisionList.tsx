"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Field } from "@/components/ui/Field";
import type { Articulo } from "@/types/content";
import type { Usuario } from "@/types/user";

type Accion = "aprobar" | "devolver";

export function RevisionList({
  pendientes,
  usuariosPorId,
}: {
  pendientes: Articulo[];
  usuariosPorId: Record<string, Usuario | undefined>;
}) {
  const [seleccion, setSeleccion] = useState<{
    articulo: Articulo;
    accion: Accion;
  } | null>(null);

  return (
    <>
      <div className="flex flex-col gap-4">
        {pendientes.map((articulo) => {
          const autor = usuariosPorId[articulo.autorId];
          return (
            <div
              key={articulo.id}
              className="border-border flex flex-col items-start gap-4 rounded-xl border px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-ink text-[15px] font-bold">
                  {articulo.titulo}
                </p>
                <p className="text-ink/55 mt-1 text-sm">
                  Enviado por {autor?.nombre} (Editor) ·{" "}
                  {articulo.actualizadoEn}
                </p>
              </div>
              <div className="flex w-full gap-2.5 sm:w-auto sm:shrink-0">
                <Button
                  variant="outline"
                  className="flex-1 sm:flex-none"
                  onClick={() => setSeleccion({ articulo, accion: "devolver" })}
                >
                  Devolver a borrador
                </Button>
                <Button
                  className="flex-1 sm:flex-none"
                  onClick={() => setSeleccion({ articulo, accion: "aprobar" })}
                >
                  Aprobar
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      {seleccion && (
        <Modal
          title={
            seleccion.accion === "aprobar"
              ? "Aprobar artículo"
              : "Devolver a borrador"
          }
          onClose={() => setSeleccion(null)}
        >
          <dl className="grid grid-cols-2 gap-3.5 text-sm">
            <Field label="Categoría">{seleccion.articulo.categoria}</Field>
            <Field label="Enviado">{seleccion.articulo.actualizadoEn}</Field>
            <Field label="Enviado por">
              {usuariosPorId[seleccion.articulo.autorId]?.nombre}
            </Field>
            <Field label="Correo del autor">
              {usuariosPorId[seleccion.articulo.autorId]?.correo}
            </Field>
            <div className="border-border col-span-2 flex flex-col gap-1 border-t pt-3">
              <dt className="text-ink/50 text-xs font-medium tracking-wide uppercase">
                Resumen
              </dt>
              <dd className="text-ink leading-relaxed">
                {seleccion.articulo.resumen}
              </dd>
            </div>
          </dl>
          <p className="text-ink text-sm">
            {seleccion.accion === "aprobar"
              ? "¿Confirmas que este artículo pasa a estado aprobado?"
              : "¿Confirmas devolver este artículo a borrador para que el editor lo ajuste?"}
          </p>
          <div className="flex justify-end gap-2.5">
            <Button variant="outline" onClick={() => setSeleccion(null)}>
              Cancelar
            </Button>
            <Button onClick={() => setSeleccion(null)}>Confirmar</Button>
          </div>
          <p className="text-ink/40 text-xs">
            Acción de ejemplo — todavía no hay flujo de aprobación real
            conectado.
          </p>
        </Modal>
      )}
    </>
  );
}
