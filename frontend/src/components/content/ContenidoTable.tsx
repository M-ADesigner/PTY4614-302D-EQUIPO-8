"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Field } from "@/components/ui/Field";
import { EstadoBadge } from "@/components/content/EstadoBadge";
import type { Articulo } from "@/types/content";
import type { Usuario } from "@/types/user";

export function ContenidoTable({
  articulos,
  usuariosPorId,
}: {
  articulos: Articulo[];
  usuariosPorId: Record<string, Usuario | undefined>;
}) {
  const [seleccionado, setSeleccionado] = useState<Articulo | null>(null);

  return (
    <>
      <div className="border-border overflow-hidden rounded-xl border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-border text-ink/45 border-b text-xs font-bold tracking-wide uppercase">
                <th className="px-5 py-3.5 text-left">Artículo</th>
                <th className="px-5 py-3.5 text-left">Estado</th>
                <th className="px-5 py-3.5 text-left">Actualizado</th>
                <th className="px-5 py-3.5"></th>
              </tr>
            </thead>
            <tbody>
              {articulos.map((articulo) => (
                <tr
                  key={articulo.id}
                  className="border-b border-[#ECEFE6] last:border-0"
                >
                  <td className="px-5 py-4">
                    <p className="text-ink font-semibold">{articulo.titulo}</p>
                    <p className="text-ink/50 text-xs">{articulo.categoria}</p>
                  </td>
                  <td className="px-5 py-4">
                    <EstadoBadge estado={articulo.estado} />
                  </td>
                  <td className="text-ink/60 px-5 py-4">
                    {articulo.actualizadoEn}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      onClick={() => setSeleccionado(articulo)}
                      className="text-navy-700 font-semibold"
                    >
                      {articulo.estado === "publicado" ? "Ver" : "Editar"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {seleccionado && (
        <Modal
          title={seleccionado.titulo}
          onClose={() => setSeleccionado(null)}
        >
          <dl className="grid grid-cols-2 gap-3.5 text-sm">
            <Field label="Estado">
              <EstadoBadge estado={seleccionado.estado} />
            </Field>
            <Field label="Categoría">{seleccionado.categoria}</Field>
            <Field label="Autor">
              {usuariosPorId[seleccionado.autorId]?.nombre ?? "—"}
            </Field>
            <Field label="Correo del autor">
              {usuariosPorId[seleccionado.autorId]?.correo ?? "—"}
            </Field>
            <Field label="Actualizado">{seleccionado.actualizadoEn}</Field>
            <Field label="Publicado">
              {seleccionado.publicadoEn ?? "Aún no publicado"}
            </Field>
            <div className="border-border col-span-2 flex flex-col gap-1 border-t pt-3">
              <dt className="text-ink/50 text-xs font-medium tracking-wide uppercase">
                Resumen
              </dt>
              <dd className="text-ink leading-relaxed">
                {seleccionado.resumen}
              </dd>
            </div>
          </dl>
          <p className="text-ink/40 text-xs">
            Vista previa — datos de ejemplo, todavía no hay edición real de
            contenido conectada.
          </p>
        </Modal>
      )}
    </>
  );
}
