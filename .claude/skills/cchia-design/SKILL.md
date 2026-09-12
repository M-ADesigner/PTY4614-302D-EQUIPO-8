---
name: cchia-design
description: Design system extracted from the real CCHIA website (www.cchia.cl) — color palette, fonts (Inter + Plus Jakarta Sans), type scale, radius and component patterns. Use whenever styling, restyling, or creating any UI in frontend/ so it visually matches CCHIA's identity, instead of default Tailwind colors/fonts.
user-invocable: true
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash(npm *)
---

# Sistema de diseño CCHIA

Tokens de diseño extraídos directamente del CSS de producción de `www.cchia.cl`
(sitio construido en Nuxt + Tailwind), el 2026-09-11. Esto es la fuente de
verdad visual para el frontend del proyecto APT — **no** usar los colores por
defecto de Tailwind (indigo, zinc, etc.) que trae el scaffold de
`create-next-app`.

Si el sitio real cambia de diseño más adelante, hay que volver a extraer los
tokens (ver "Cómo se obtuvieron estos datos" al final) y actualizar este
archivo.

---

## Paleta de colores

| Token | Hex | Uso observado en cchia.cl |
|---|---|---|
| `primary` (lima/chartreuse) | `#B1E346` | Color de marca principal: acentos, fondos de badges/pills, subrayados, íconos activos, `fill` de gráficos |
| `ink` (texto) | `#18181B` | Color de texto por defecto para títulos y párrafos (casi negro, tibio) |
| `navy-900` | `#1A365D` | Extremo oscuro de los gradientes azules (hero, CTAs) |
| `navy-700` | `#2B77AD` | Azul medio, punto intermedio de gradientes |
| `navy-500` | `#4A90C2` | Azul claro, extremo final de gradientes |
| `navy-100` | `#E6F3FF` | Fondo azul muy claro, variante "light" de los gradientes |
| `border` | `#DCE0D3` | Bordes y separadores sutiles (gris cálido/verdoso, no gris puro) |
| `border-soft` | `#D9E0C5` | Variante aún más suave del borde, usada en decoraciones (SVG dashed lines) |
| `background` | `#FFFFFF` | Fondo base de las secciones claras |

Variantes de opacidad del primario usadas como fondos suaves (badges, hovers):
`primary/5`, `primary/10`, `primary/20`, `primary/25`, `primary/30`, `primary/60`.

Gradientes con nombre real del sitio:
- **Azul (hero/CTA oscuro):** `linear-gradient(135deg, #1A365D, #2B77AD 50%, #4A90C2)`
- **Azul vertical (hero):** `linear-gradient(180deg, #1A365D, #1A365D 30%, #2B77AD)`
- **Azul claro:** `linear-gradient(135deg, #E6F3FF, #4A90C2)`

> Nota: la presentación de kickoff del equipo (PPT en `ppt/`) usa un esquema
> morado/índigo — **eso es solo el estilo de la presentación**, no el diseño
> real del sitio del cliente. Para el frontend del producto, usar siempre
> esta paleta (lima + azul navy), no la del PPT.

### Botones reales (importante — no son lima)

El componente `.btn` real del sitio **no usa lima como fondo**. El lima es
un color de acento (íconos, checkmarks, resplandores decorativos), no el
color de los botones de acción:

| Clase real | Fondo | Texto | Uso observado |
|---|---|---|---|
| `.btn` | Gradiente oscuro `linear-gradient(to bottom, #1E293B, #0F172A)` (slate-800→900, distinto del navy custom) | Blanco | Botón primario ("Contáctanos") |
| `.btn-navbar` (+ `.btn` + `.btn-sm`) | Mismo gradiente oscuro | Blanco | CTA del header ("Hazte Socio"), padding reducido |
| `.btn-outline` | Blanco sólido, borde `#EDF0E6` | `#18181B` | Botón secundario |

Specs comunes: `border-radius: 30px` (pill), `font: Inter 500, 16px, letter-spacing -0.3px`, padding `13px 30px` (`.btn-sm`: `8px 24px`), sombra suave `0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)`, hover `scale(1.05)`.

### Header y logo reales

- Header fijo (`position: fixed`), fondo blanco, `padding: 32px 0 8px`.
- Logo real: imagen `/images/Logo_CCHIA.png` (isotipo + wordmark), alto ~64px, ancho máx 200px, `object-fit: contain`. No es un wordmark de texto.
- El header **solo** tiene el logo a la izquierda y un botón `.btn.btn-navbar.btn-sm` ("Hazte Socio") a la derecha — **no hay enlaces de navegación** (nada de "Inicio / Artículos / Boletines").

### Hero real (copy exacto)

```
[uppercase, font-medium, blanco] Cámara Chilena de Inteligencia Artificial
[h1, blanco] Impulsando la Inteligencia Artificial
             en Chile.
[párrafo, blanco] Únete a la organización líder en IA de Chile. Conecta,
                   innova y transforma el futuro con nosotros.
[botón .btn → /request-info] Contáctanos
[botón .btn-outline (bg blanco forzado) → Google Form] Hazte Socio
```

Debajo, una fila de 3 beneficios con ícono circular relleno en **primary**
(lima) + check blanco, texto blanco:
`Acceso a eventos exclusivos` · `Networking con expertos` · `Recursos y capacitaciones`

- Fondo de la sección hero: `bg-blue-hero-gradient` = `linear-gradient(180deg, #1A365D, #1A365D 30%, #2B77AD)`.
- `h1` en desktop (≥1280px): **64px**, `line-height: 1.33`, weight 700 (36px/1.2 en mobile).

### Patrones de tarjetas reales

- **Tarjeta "objetivo"** (fondo de color): `border-radius: 20px` (`rounded-medium`), fondo `bg-blue-gradient` (`linear-gradient(135deg, #1A365D, #2B77AD 50%, #4A90C2)`), padding `32px` (`p-8`), sombra suave (`shadow-nav`). Texto blanco encima.
- **Tarjeta blanca con borde**: `border-radius: 12px` (`rounded` default), `border: 1px dashed #DCE0D3` (`border-gray-100`), fondo blanco, padding `32px`.
- **Encabezado de sección sobre fondo blanco**: `font-size: 38px` (`32px` en mobile), `font-weight: 800` (extrabold), **centrado**, color `#111827` (gray-900 estándar — puede aproximarse con el `ink` `#18181B` del sistema).

---

## Tipografía

- **Encabezados (`h1`–`h6`)**: **Plus Jakarta Sans**, peso 600–700.
- **Cuerpo, párrafos, enlaces**: **Inter**, peso 400.

Escala tipográfica observada (desktop):

| Elemento | Tamaño | Peso | Line-height |
|---|---|---|---|
| `h1` | 64px (36px en mobile) | 700 | 1.2 |
| `h2` | 32–36px | 700 | 1.33 |
| `h3` | 22–24px | 600 | — |
| `h4` | 20px (1.25rem) | — | — |
| `h5` | 18px (1.125rem) | 400 | 1.75rem |
| `p` / `h6` | 16px (1rem) | 400 | 1.5rem |

### Cómo aplicarlo en Next.js (`next/font/google`)

```tsx
// frontend/src/app/layout.tsx
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
});
```

Luego en `globals.css`, mapear las variables dentro del bloque `@theme`
(Tailwind v4 usa CSS-first config, no `tailwind.config.js`):

```css
@theme inline {
  --font-sans: var(--font-body);
  --font-heading: var(--font-heading);
}
```

Y usar `font-heading` en títulos (`h1`–`h6` o clase utilitaria
`className="font-heading font-bold"`), dejando `font-sans` (Inter) como
default del `body`.

---

## Forma y espaciado

- Radio de borde por defecto: **12px** (el sitio sobreescribe el `rounded`
  default de Tailwind, que normalmente es 4px).
- Radio "medium" (cards destacadas, botones grandes): **20px**.
- Elementos tipo badge/pill: `rounded-full`.
- Sombra sutil tipo `shadow-md`: `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`.

---

## Cómo integrarlo en `frontend/`

1. **Colores** — agregar los tokens al bloque `@theme` de
   `frontend/src/app/globals.css` como variables `--color-*`
   (ej. `--color-primary: #B1E346;`, `--color-navy-900: #1A365D;`, etc.),
   siguiendo el patrón CSS-first de Tailwind v4 que ya usa el proyecto.
2. **Fuentes** — reemplazar `Geist`/`Geist_Mono` en `layout.tsx` por
   `Inter` y `Plus_Jakarta_Sans` como se muestra arriba.
3. **Componentes** — usar `bg-primary` para acentos y CTAs secundarios,
   los gradientes `navy-900 → navy-700 → navy-500` para héroes/CTAs
   principales, `border-border` (color `#DCE0D3`) para separadores, y
   `text-ink` como color de texto por defecto en vez de `zinc-900`.
4. Verificar siempre con `npx tsc --noEmit` y `npx eslint .` después de
   cambios de estilo, y levantar `npm run dev` para confirmar visualmente.

---

## Cómo se obtuvieron estos datos

Extraídos descargando el HTML y los bundles CSS reales de producción:

```bash
curl -s -A "Mozilla/5.0" https://www.cchia.cl/ -o cchia.html
# buscar los <link rel="stylesheet" href="/_nuxt/....css">
curl -s -A "Mozilla/5.0" https://www.cchia.cl/_nuxt/<archivo>.css -o entry.css
# luego grep de hex colors, font-family y selectores h1-h6
```

Si el sitio se rediseña, repetir este proceso (los nombres de archivo
`_nuxt/*.css` cambian en cada build) y actualizar los valores de este
documento.
