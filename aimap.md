# Astro + Tailwind + GitHub Pages Project

## Resumen del Proyecto
Sitio web estático, construido con Astro 5.x y estilizado con Tailwind CSS. Se desplegará en GitHub Pages.

## Entorno de Desarrollo
- **OS**: macOS Sequoia 15.6
- **Editor**: VS Code
- **Node.js**: v22.18.0 (gestionado con nvm)
- **GitHub User**: entegigante

## Estrategia de Configuración (Resumen funcional para IA)
- **Framework**: Proyecto Astro creado con `npm create astro@5.x`.
- **Estilos**: Se resolvió un conflicto de dependencias (`ERESOLVE`) entre `tailwindcss@4.x` y `@astrojs/tailwind` instalando la integración oficial de Astro para Tailwind.
- **Configuración exitosa**:
    - Se instaló `@astrojs/tailwind` correctamente.
    - Se actualizó `astro.config.mjs` con la integración de Tailwind y se añadió la configuración `site` y `base` para GitHub Pages.
    - Se modificó `package.json` para incluir un script de despliegue.
- **Verificación**: Se confirmó el funcionamiento de Tailwind CSS en el navegador (`localhost:4321`) con la aplicación de clases de utilidad a elementos HTML.
- **Despliegue en GitHub Pages**:
    - Se creó un repositorio en GitHub.
    - Se configuró un flujo de trabajo de GitHub Actions (`.github/workflows/deploy.yml`) para construir y desplegar el sitio en la rama `gh-pages`.

## Tareas Pendientes
- [x] Crear la primera página y componentes.
- [x] Configurar el despliegue en GitHub Pages.