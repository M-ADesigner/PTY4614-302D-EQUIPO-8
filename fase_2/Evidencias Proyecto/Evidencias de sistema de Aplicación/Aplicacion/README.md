# Evidencias de sistema: Aplicación

Frontend y backend Next.js 16 del repositorio NodoIA-Fe, rama main: https://github.com/M-ADesigner/NodoIA-Fe

## Capturas (carpeta capturas/, tomadas el 23-10-2026)
Entorno local:
- 01_inicio.png: inicio del sitio público de CCHIA.
- 02_articulos.png: listado de artículos.
- 03_articulo_detalle.png: detalle de un artículo.
- 04_login.png: login del panel interno.
- 05_panel_contenido.png, 06_panel_revision.png, 07_panel_admin.png: panel interno (contenido, cola de revisión y administración de usuarios).

Entorno QA desplegado en Railway (nodoia-cchia.up.railway.app):
- 08_qa_inicio.png, 09_qa_login.png, 10_qa_panel_contenido.png, 11_qa_panel_revision.png, 12_qa_panel_admin.png.

## Estructura del código (evidencia de programación)
- src/app: rutas. Sitio público ((public)/, articulos/[slug]), login/, dashboard/ (contenido, revision, admin), api/health, og/, robots y sitemap.
- src/lib/auth: JWT, sesión, roles y hash de contraseñas.
- src/lib/db: cliente, consultas y esquema drizzle (schema.ts).
- src/lib/content: flujo editorial (workflow.ts) y datos de ejemplo.
- src/lib/seo: metadatos, JSON-LD y Open Graph.
- src/lib/ai/client.ts: interfaz del asistente de IA, sin proveedor configurado.
- drizzle/: migraciones 0000, 0001 y 0002.

## Estado
- Operativo: sitio público, login con roles, CRUD de usuarios, base de datos con migraciones y entorno QA.
- Parcial: vistas de contenido y revisión (solo lectura; las acciones de aprobar y devolver aún no están conectadas).
- Pendiente: crear y editar artículos, integración de IA (fuera del alcance actual), pruebas automatizadas y producción.
