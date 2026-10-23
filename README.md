# Proyecto APT — Plataforma de Publicación Asistida por IA

> **Cliente:** Cámara Chilena de Inteligencia Artificial (CCHIA)
> **Estado (23-10-2026):** Fase 2, desarrollo. Plataforma operativa en entorno QA; revisión parcial; integración de IA fuera del alcance actual.

APT es una plataforma orientada a facilitar la **recopilación, generación, revisión y publicación de contenido**, utilizando inteligencia artificial como herramienta de apoyo durante el proceso de creación.

---

## Estado actual

| Componente | Estado |
|---|---|
| Sitio público (inicio, listado y detalle de artículos, SEO) | Operativo |
| Login con JWT, roles y protección de rutas | Operativo |
| Panel interno: administración de usuarios (CRUD) | Operativo |
| Base de datos PostgreSQL con migraciones (drizzle) | Operativo |
| Despliegue en Railway (entorno QA) | Operativo, sin producción aún |
| Panel interno: vistas de contenido y cola de revisión | Parcial (solo lectura; las acciones de aprobar y devolver no están conectadas) |
| Crear y editar artículos desde el panel | Pendiente |
| Integración de IA (redacción, resumen y corrección) | Fuera del alcance actual; solo existe la interfaz sin proveedor |
| Pruebas automatizadas | Pendiente |
| Validación con el cliente | No realizada: el cliente nunca se conectó a las reuniones agendadas |

Los requisitos se levantaron a partir de la presentación de kickoff y de la investigación pública del cliente, y no han sido validados con él.

---

## Contexto

La **Cámara Chilena de Inteligencia Artificial** publica contenido como **artículos, boletines y publicaciones institucionales** de forma interna, con circulación restringida a sus socios y procesos principalmente manuales. Esto genera tiempos de preparación elevados y dificulta la publicación ágil de información.

El proyecto APT proporciona una plataforma que centraliza este proceso y facilita la transformación de información en contenido preparado para su difusión pública.

---

## Problema a resolver

La Cámara Chilena de Inteligencia Artificial no cuenta con una plataforma centralizada que permita gestionar de manera integrada el proceso de:

**recopilación → generación → revisión → aprobación → publicación**

### Problema central

> La Cámara Chilena de Inteligencia Artificial no cuenta con una plataforma que permita transformar información en contenido público de manera **ágil, centralizada y asistida por inteligencia artificial**.

---

## Objetivo general

Desarrollar una **plataforma web de publicación asistida por inteligencia artificial** que permita a la Cámara Chilena de Inteligencia Artificial **recopilar, generar, gestionar y publicar contenido dirigido al público general**, incorporando una etapa de **revisión y aprobación humana** antes de su publicación.

## Objetivos específicos

1. **Recopilar y organizar información** relevante para la generación de contenido.
2. **Utilizar inteligencia artificial como apoyo** en redacción, resumen, estructuración, corrección y mejora de contenidos.
3. **Implementar revisión y aprobación humana** antes de publicar.
4. **Facilitar la gestión de contenidos** (creación, edición, organización y administración).
5. **Facilitar la publicación pública** de forma organizada y accesible.

---

## Flujo general de la solución

```text
Recopilación de información
        ↓
Asistencia mediante Inteligencia Artificial   (proyectado)
        ↓
Edición y revisión humana
        ↓
Aprobación
        ↓
Publicación pública
```

La **inteligencia artificial actuará como herramienta de apoyo**. La decisión final sobre la publicación permanece bajo **control humano**. Estados del contenido en el sistema: borrador, asistido por IA, en revisión, aprobado y publicado.

---

## Alcance

El alcance se acotó a un **MVP del flujo editorial** (redacción, revisión, aprobación y publicación), porque no fue posible validar requisitos con el cliente. La integración de IA queda fuera del alcance actual.

---

## Usuarios de la plataforma

- **Administrador:** gestiona usuarios, roles y la plataforma.
- **Revisor:** revisa y valida los contenidos antes de su publicación.
- **Autor:** crea y edita contenidos.
- **Público general:** accede al contenido publicado sin iniciar sesión.

> Los roles y permisos definitivos no se pudieron confirmar con el cliente.

---

## Tecnologías

- **Frontend y backend:** Next.js 16, React 19, TypeScript y Tailwind (Server Actions y Route Handlers).
- **Base de datos:** PostgreSQL con drizzle ORM y migraciones versionadas.
- **Autenticación:** JWT en cookie HttpOnly, contraseñas con scrypt y control por roles.
- **Despliegue:** Railway (entorno QA).
- **Gestión:** GitHub, Jira (tablero Kanban) y Scrum con sprints.

El código de la aplicación está en el repositorio **NodoIA-Fe** (rama `main`): https://github.com/M-ADesigner/NodoIA-Fe

---

## Estructura de este repositorio

```text
fase_1/   Evidencias de la Fase 1 (grupales e individuales)
fase_2/
  Evidencias Grupales/      Informe de avance (2.4), informe final (2.6) y planillas
  Evidencias Individuales/  Diario de reflexión (2.1)
  Evidencias Proyecto/      Presentación, documentación y evidencias de sistema
  Otros/                    Material fuera de la revisión y tareas pendientes
fase_3/   Evidencias de la Fase 3
```

---

## Equipo

**PTY4614-302D — Equipo 8**

- Maicol Ávila — Scrum Master y desarrollador
- Carolina Cancino — Product Owner y desarrolladora
- Joaquín Torres — Desarrollador

Repositorio del proyecto: **PTY4614-302D-EQUIPO-8**
