# Evidencias de sistema: Base de datos

Base PostgreSQL gestionada con drizzle ORM en el repositorio NodoIA-Fe (rama main). Esquema en src/lib/db/schema.ts y migraciones en drizzle/ (0000 a 0002).

Tablas principales: roles, usuarios (nombre, correo, rol, hash de contraseña, activo) y articulos (slug, título, categoría, resumen, contenido, estado, autor, fechas). Estados del contenido: borrador, asistido_ia, en_revision, aprobado, publicado.

La aplicación se conecta a la base mediante DATABASE_URL (el valor no se versiona).

Nota: el proyecto Neon 'CCHIA' del 29-09-2026 solo tiene las tablas de autenticación de neon_auth y no es la base que usa la aplicación.

Pendiente: captura de las tablas con datos.


Actualización 23-10-2026: esquema_y_conteos_2026-10-23.txt muestra las tablas de la base real (articulos: 9 filas, roles: 3, usuarios: 6), sus columnas y los artículos por estado. Consulta de solo lectura; no incluye contraseñas.
