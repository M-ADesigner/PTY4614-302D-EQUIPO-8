# Proyecto APT — Plataforma de Publicación Asistida por IA

> **Cliente:** Cámara Chilena de Inteligencia Artificial
> **Estado:** Fase inicial de levantamiento de requisitos (kickoff).

APT es una plataforma orientada a facilitar la **recopilación, generación, revisión y publicación de contenido**, utilizando inteligencia artificial como herramienta de apoyo durante el proceso de creación.

Este README se irá actualizando a medida que avance el proyecto y se definan nuevos requerimientos junto al cliente.

---

## Contexto

La **Cámara Chilena de Inteligencia Artificial** busca facilitar la generación y difusión de contenido relacionado con la inteligencia artificial y su impacto en distintos ámbitos.

Actualmente, la preparación de contenidos como **artículos, boletines y publicaciones institucionales** requiere procesos principalmente manuales. Esto puede generar tiempos de preparación elevados y dificultar la publicación ágil de información.

El proyecto APT busca proporcionar una plataforma que permita centralizar este proceso y facilitar la transformación de información en contenido preparado para su difusión pública.

---

## Problema a resolver

Actualmente, la Cámara Chilena de Inteligencia Artificial no cuenta con una plataforma centralizada que permita gestionar de manera integrada el proceso de:

**recopilación → generación → revisión → aprobación → publicación**

La preparación manual del contenido requiere tiempo y esfuerzo, y no existe actualmente un flujo integrado que permita utilizar **inteligencia artificial como apoyo a la creación y edición de contenidos**, manteniendo una instancia de validación humana.

### Problema central

> La Cámara Chilena de Inteligencia Artificial no cuenta con una plataforma que permita transformar información en contenido público de manera **ágil, centralizada y asistida por inteligencia artificial**.

---

## Objetivo general

Desarrollar una **plataforma web de publicación asistida por inteligencia artificial** que permita a la Cámara Chilena de Inteligencia Artificial **recopilar, generar, gestionar y publicar contenido dirigido al público general**, incorporando una etapa de **revisión y aprobación humana** antes de su publicación.

---

## Objetivos específicos

### 1. Recopilar y organizar información

Desarrollar mecanismos que permitan **recopilar, almacenar y organizar información relevante** para la generación de contenido.

### 2. Utilizar inteligencia artificial como apoyo

Incorporar herramientas de **inteligencia artificial** que permitan apoyar tareas como la redacción, resumen, estructuración, corrección y mejora de contenidos.

### 3. Implementar revisión y aprobación humana

Establecer un flujo de trabajo que permita a los usuarios **revisar, editar, validar y aprobar** los contenidos antes de que sean publicados.

### 4. Facilitar la gestión de contenidos

Permitir la **creación, edición, organización y administración** de los contenidos generados dentro de la plataforma.

### 5. Facilitar la publicación pública

Proporcionar mecanismos que permitan **publicar y difundir los contenidos** de manera organizada y accesible para el público general.

---

## Flujo general de la solución

El flujo propuesto para la plataforma contempla las siguientes etapas:

```text
┌──────────────────────┐
│ Recopilación         │
│ de información       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Asistencia mediante  │
│ Inteligencia Artificial│
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Edición y revisión   │
│ humana               │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Aprobación           │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Publicación pública  │
└──────────────────────┘
```

La **inteligencia artificial actuará como herramienta de apoyo** durante el proceso de creación y edición. La decisión final sobre la publicación del contenido permanecerá bajo **control humano**.

---

## Alcance inicial

Durante la etapa inicial del proyecto se considera como alcance:

* Recopilación de información para la generación de contenidos.
* Generación y asistencia de contenido mediante IA.
* Edición y modificación de contenidos.
* Revisión y validación humana.
* Aprobación de contenido previo a su publicación.
* Gestión de artículos y publicaciones.
* Publicación de contenido para el público general.

El alcance podrá modificarse o ampliarse a medida que avance el levantamiento de requisitos con el cliente.

---

## Usuarios de la plataforma

De manera preliminar, se consideran los siguientes tipos de usuarios:

### Administrador

Responsable de la administración general de la plataforma y de la gestión de usuarios y configuraciones.

### Editor

Responsable de trabajar sobre los contenidos, utilizando las herramientas de IA, realizando modificaciones y preparando las publicaciones.

### Revisor

Responsable de revisar y validar los contenidos antes de su publicación.

### Público general

Usuarios externos que podrán acceder al contenido publicado de manera pública.

> Los roles y permisos definitivos serán definidos durante la etapa de levantamiento de requisitos.

---

## Equipo

**PTY4614-302D — Equipo 8**

Repositorio del proyecto:

**PTY4614-302D-EQUIPO-8**
