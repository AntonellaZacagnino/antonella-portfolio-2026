# Guía de trabajo del portfolio

## Stack y arquitectura

- Usar Next.js con App Router y TypeScript estricto. Mantener `noImplicitAny` habilitado y evitar `any` explícito.
- Usar React Server Components por defecto. Añadir `'use client'` solo a componentes que necesiten estado, efectos, eventos de navegador o APIs del cliente.
- Escribir estilos propios en Sass/SCSS Modules (`*.module.scss`). No usar Tailwind CSS ni librerías de componentes prefabricados.
- Para Sass, usar exclusivamente `@use` y `@forward`; no introducir `@import`.
- Mantener tokens, mixins, reset y estilos globales centralizados bajo `src/styles/`.
- Mantener contenido traducible en diccionarios tipados y los datos de proyectos en `src/data/`.

## Convenciones SCSS

- Nombrar clases con camelCase en módulos (`.projectCard`, `.cardTitle`) para aprovechar el acceso tipado desde TypeScript. BEM solo se permite para modificadores locales cuando haga más clara la relación (`.projectCard--featured`).
- Preferir clases de alcance local y evitar selectores globales salvo en `globals.scss` y `_reset.scss`.
- Consumir variables de diseño mediante Custom Properties CSS; usar variables Sass para valores estructurales de compilación como breakpoints, espaciados y capas.
- Centralizar patrones reutilizables en mixins y cargarlos con `@use`.
- Mantener estados de foco visibles, contraste suficiente y soporte para `prefers-reduced-motion`.
- No codificar colores, medidas o capas repetidas si existe un token o variable compartida apropiada.

## Calidad

- Usar HTML semántico, nombres accesibles y atributos ARIA solo cuando sean necesarios para completar la semántica nativa.
- Mantener los componentes enfocados y separar presentación, contenido y comportamiento interactivo.
- No agregar dependencias sin necesidad para la funcionalidad acordada.
