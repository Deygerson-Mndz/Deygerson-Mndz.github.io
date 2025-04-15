
# Tech Blog PoC

Prueba de concepto de blog profesional para contenido técnico sobre Azure, Databricks y Fabric.

## Scripts

- `npm install` - Instala las dependencias
- `npm run dev` - Servidor local
- `npm run build && npm run export` - Genera sitio estático para Netlify

## Hosting

Sube a Netlify y configura:
- Build command: `npm run build && npm run export`
- Publish directory: `out`
