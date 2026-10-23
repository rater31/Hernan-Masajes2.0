# Hernán Masajes

Sitio web de Hernán Masajes (Salta, Argentina): masajes, cuidado corporal y estética corporal. Es un sitio estático construido con Astro y Tailwind CSS, sin backend. Los turnos se coordinan por WhatsApp.

## Stack

- [Astro](https://astro.build/) 7
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript
- `@astrojs/sitemap` para el sitemap

Requiere Node.js `>=22.12.0`.

## Comandos

| Comando           | Acción                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Instala las dependencias                       |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`     |
| `npm run build`   | `astro check` + build de producción en `dist/` |
| `npm run preview` | Previsualiza el build localmente               |
| `npm run lint`    | Ejecuta ESLint                                 |
| `npm run format`  | Formatea el proyecto con Prettier              |

## Estructura

```text
/
├── public/                 # favicon y archivos estáticos
├── src/
│   ├── components/         # secciones y componentes reutilizables
│   ├── img/                # imágenes procesadas por Astro
│   ├── layouts/            # layout común (menú, contenido, footer, WhatsApp)
│   ├── lib/
│   │   ├── contacto.ts     # datos de contacto y links de WhatsApp
│   │   ├── masajes.ts      # listado y contenido de los masajes
│   │   └── navegacion.ts   # links del menú
│   ├── pages/              # rutas del sitio
│   └── styles/global.css   # Tailwind
└── astro.config.mjs
```

## Cómo editar contenido

- **Masajes**: `src/lib/masajes.ts`. Cada servicio tiene `title`, `especificaciones`, `items` (título y descripción de cada variante) y `fondo` (imagen de la tarjeta).
- **Cuidado corporal y estética**: `src/components/Cuerpo.astro` y `src/components/Estetica.astro`.
- **Contacto, WhatsApp y redes**: `src/lib/contacto.ts`.
- **Menú**: `src/lib/navegacion.ts`.
- **Metadatos por página**: props `title` y `description` en cada archivo de `src/pages/`.

## Deploy

El workflow `.github/workflows/astro.yml` publica el sitio en GitHub Pages al hacer push a `main`. El `site` base está configurado en `astro.config.mjs`.
