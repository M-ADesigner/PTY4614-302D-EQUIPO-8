# Documentación del Proyecto APT — Plataforma de Publicación Asistida por IA

> **Cliente:** Cámara Chilena de Inteligencia Artificial (CCHIA)
> **Equipo:** PTY4614-302D — Equipo 8
> **Fase actual:** Fase 2 — Levantamiento de Requisitos Inicial (kickoff realizado el 10 de septiembre de 2026)
> **Fuentes de este documento:** README.md del repositorio, presentación de kickoff (`ppt/Proyecto de Plataforma Digital para Cámara Gremial en Chile.pdf`), investigación del cliente (`Investigacion_Cliente_CCHIA.md`)

---

## 1. Resumen ejecutivo

CCHIA es una agrupación gremial sin fines de lucro que articula al ecosistema de inteligencia artificial en Chile. Genera contenido institucional (artículos, boletines, revista) de buena calidad, pero **su circulación es interna, restringida a los asociados**, sin alcance ni visibilidad pública.

El proyecto **APT** busca construir una **plataforma digital de publicación asistida por IA** que permita transformar ese contenido interno en publicaciones públicas, mediante un flujo que combine apoyo de inteligencia artificial en la redacción/estructuración con una instancia obligatoria de **revisión y aprobación humana** antes de publicar.

---

## 2. Contexto del cliente

- Organización: Cámara Chilena de Inteligencia Artificial (CCHIA), agrupación gremial sin fines de lucro.
- Rol: articula y conecta al ecosistema de IA en Chile (consultores, startups, investigadores, organismos públicos, empresas).
- Situación actual: las publicaciones internas (artículos, boletines, revista institucional) tienen circulación restringida a sus asociados.
- Oportunidad detectada: abrir ese contenido al público general mediante un sitio web o revista digital de acceso libre.
- Más antecedentes generales de la organización (misión, redes sociales, directorio) están detallados en [`Investigacion_Cliente_CCHIA.md`](./Investigacion_Cliente_CCHIA.md).

---

## 3. Problema a resolver

CCHIA no cuenta con una plataforma centralizada que permita gestionar de manera integrada el proceso de **recopilación → generación → revisión → aprobación → publicación** de contenido.

Desafíos específicos identificados en el kickoff:

1. Contenido generado manualmente, sin automatización ni flujo estructurado → ineficiencias y demoras en la producción editorial.
2. Acceso restringido a la información generada → limita el alcance y visibilidad institucional.
3. Ausencia de un mecanismo ágil para recopilar, redactar y publicar contenido hacia el público general.
4. Necesidad de transformar publicaciones de circulación restringida en recursos accesibles digitalmente.

**Problema central:**
> CCHIA no cuenta con una plataforma que permita transformar información en contenido público de manera ágil, centralizada y asistida por inteligencia artificial.

---

## 4. Objetivos

### Objetivo general
Desarrollar una plataforma web de publicación asistida por inteligencia artificial que permita a CCHIA recopilar, generar, gestionar y publicar contenido dirigido al público general, incorporando una etapa de revisión y aprobación humana antes de su publicación.

### Objetivos específicos
1. **Recopilar y organizar información** relevante para la generación de contenido.
2. **Utilizar IA como apoyo** en redacción, resumen, estructuración, corrección y mejora de contenidos.
3. **Implementar revisión y aprobación humana** antes de publicar.
4. **Facilitar la gestión de contenidos** (creación, edición, organización, administración).
5. **Facilitar la publicación pública**, de forma organizada y accesible.

---

## 5. Flujo propuesto de la solución

```text
Recopilación de información
        ↓
Asistencia mediante Inteligencia Artificial
        ↓
Edición y revisión humana
        ↓
Aprobación
        ↓
Publicación pública
```

La IA actúa como **herramienta de apoyo**; la decisión final de publicar permanece bajo **control humano**.

---

## 6. Alcance inicial

- Recopilación de información para la generación de contenidos.
- Generación y asistencia de contenido mediante IA.
- Edición y modificación de contenidos.
- Revisión y validación humana.
- Aprobación de contenido previo a publicación.
- Gestión de artículos y publicaciones.
- Publicación de contenido para el público general.

> El alcance podrá modificarse o ampliarse a medida que avance el levantamiento de requisitos con el cliente.

---

## 7. Usuarios / roles preliminares

| Rol | Responsabilidad |
|---|---|
| **Administrador** | Administración general de la plataforma, gestión de usuarios y configuraciones |
| **Editor** | Trabaja los contenidos con apoyo de IA, realiza modificaciones y prepara publicaciones |
| **Revisor** | Revisa y valida los contenidos antes de publicar |
| **Público general** | Accede al contenido publicado |

> Roles y permisos definitivos se confirmarán con el cliente. Falta mapear estos roles a personas/cargos reales dentro de CCHIA (directorio, comisiones, equipo de comunicaciones).

---

## 8. Riesgos y supuestos

| Tipo | Descripción |
|---|---|
| ⚠️ Inconsistencia detectada | El PPT de kickoff cierra con datos de contacto (`contacto@camaradigital.cl`, `www.camaradigital.cl`, teléfono, dirección Santiago) que **no coinciden** con el dominio real investigado (`cchia.cl`). Posible texto de plantilla sin reemplazar — **debe confirmarse con el cliente antes de usarse en cualquier entregable**. |
| Supuesto | Se asume que el contenido publicado vivirá dentro o enlazado a `cchia.cl`, pero esto no está confirmado. |
| Riesgo | No existe hoy un listado oficial de quién ocupará cada rol (Admin/Editor/Revisor) dentro de CCHIA. |
| Riesgo | No se ha definido volumen actual de contenido (cuántos artículos/boletines al mes) ni el proceso editorial actual, lo que dificulta dimensionar el flujo de trabajo. |
| Supuesto | Se asume que el "contenido valioso generado internamente" ya existe en algún repositorio o medio (Word, Drive, etc.) que deberá integrarse o migrarse. |

---

## 9. Preguntas abiertas para validar con el cliente

1. ¿Cuál es el canal de contacto oficial de CCHIA (correo, teléfono, responsable de proyecto)?
2. ¿Dónde se publicará el contenido final: nueva sección de `cchia.cl`, subdominio, sitio/app independiente?
3. ¿Quiénes ocuparán los roles de Administrador, Editor y Revisor dentro de la organización?
4. ¿Cuántos artículos/boletines se generan actualmente y con qué frecuencia?
5. ¿En qué formato/herramienta se encuentra el contenido interno actual (Word, Drive, revista en PDF, etc.)?
6. ¿Qué tareas específicas del proceso editorial esperan que la IA apoye (redacción desde cero, resumen, corrección de estilo, generación de titulares, etc.)?
7. ¿Existen restricciones de marca, tono editorial o lineamientos de estilo que la IA deba respetar?
8. ¿Hay integraciones necesarias (newsletter, redes sociales, CMS existente)?
9. ¿Cuál es el presupuesto/tiempo disponible y la fecha objetivo de entrega?

---

## 10. Próximos pasos recomendados

1. **Confirmar datos de contacto reales** de CCHIA y aclarar la discrepancia detectada en el PPT.
2. **Agendar reunión(es) de levantamiento de requisitos** con los equipos involucrados de CCHIA (mencionado como paso siguiente en el cierre del kickoff).
3. **Preparar guion/cuestionario de entrevista** basado en las preguntas abiertas de la sección 9.
4. **Levantar requisitos funcionales y no funcionales** detallados (historias de usuario por rol).
5. **Definir el MVP**: qué se entrega en la primera versión vs. qué queda para fases posteriores.
6. **Mapear roles reales de CCHIA** a los roles del sistema (Admin/Editor/Revisor).
7. **Definir stack técnico y arquitectura** una vez estén claros los requisitos (hosting, dónde vive la plataforma, integraciones).
8. **Documentar y validar el flujo editorial** (recopilación → IA → revisión → aprobación → publicación) con ejemplos reales de contenido de CCHIA.
9. **Actualizar este documento y el README.md** a medida que se resuelvan las preguntas abiertas.

---

## Documentos relacionados
- [`README.md`](../../README.md) — contexto y objetivos del proyecto (fuente original)
- [`Investigacion_Cliente_CCHIA.md`](./Investigacion_Cliente_CCHIA.md) — investigación pública sobre CCHIA
- `ppt/Proyecto de Plataforma Digital para Cámara Gremial en Chile.pdf` — presentación de kickoff (10-sept-2026)
