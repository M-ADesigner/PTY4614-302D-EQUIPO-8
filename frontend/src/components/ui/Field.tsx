import type { ReactNode } from "react";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-ink/50 text-xs font-medium tracking-wide uppercase">
        {label}
      </dt>
      <dd className="text-ink text-sm font-medium">{children}</dd>
    </div>
  );
}
