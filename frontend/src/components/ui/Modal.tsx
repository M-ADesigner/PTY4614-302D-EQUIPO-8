"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="border-border shadow-btn flex w-full max-w-sm flex-col gap-4 rounded-xl border bg-white p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-heading text-ink text-lg font-bold">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="text-ink/50 hover:text-ink text-xl leading-none"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
