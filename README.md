# Landing page de MAYA

Este repositorio contiene la landing page de MAYA, construida con Astro y Tailwind CSS. Está pensada para presentar la propuesta de valor de MAYA y ofrecer una experiencia de página estática ligera y moderna.

## 🚀 Estructura del proyecto

Dentro de este proyecto encontrarás las carpetas y archivos principales:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   └── styles/
└── package.json
```

- `src/pages/` contiene las páginas públicas como `index.astro` y `terminos.astro`.
- `src/components/` agrupa los componentes reutilizables usados en la landing.
- `public/` aloja activos estáticos como imágenes y archivos públicos.
- `src/styles/global.css` define los estilos globales del proyecto.

## 🧞 Comandos básicos

Ejecuta los siguientes comandos desde la raíz del proyecto:

| Comando                   | Acción                                                                 |
| :------------------------ | :--------------------------------------------------------------------- |
| `npm install`             | Instala las dependencias del proyecto                                   |
| `npm run dev`             | Inicia el servidor de desarrollo local                                  |
| `npm run build`           | Genera el sitio para producción en `./dist/`                            |
| `npm run preview`         | Previsualiza el sitio ya compilado antes de desplegar                   |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro                                          |

## 🧪 Cómo usarlo

1. Clona el repositorio.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev`.
4. Abre `http://localhost:4321` en tu navegador.

## 📌 Notas

- El contenido de la landing page se define principalmente en `src/pages/index.astro` y los componentes en `src/components/`.
- Para cambios de estilo, revisa `tailwind.config.cjs` y `src/styles/global.css`.

## 👀 Más información

Consulta la documentación de Astro en https://docs.astro.build si necesitas ayuda adicional.
