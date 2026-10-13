# Fotografías del catálogo

Los 39 productos usan 50 fotografías PNG originales de Apple, Samsung y Xiaomi, almacenadas en `public/imgs/products/`. No son recreaciones por IA. Se eligieron recursos con transparencia; las galerías solo incluyen las tomas adecuadas disponibles, por lo que algunos productos tienen una única fotografía. Incluye seis imágenes de los productos Apple anunciados en septiembre de 2026.

El archivo `public/imgs/sources.json` conserva la página de procedencia, la URL exacta descargada y las dimensiones de cada imagen. Algunas fotos muestran varios acabados del mismo modelo. Los derechos corresponden a sus titulares: disponer del archivo no implica autorización para reutilizarlo en una tienda comercial.

## Cómo se encuadran

`ProductImageComponent` escala y centra la zona visible de cada PNG, ignorando el margen transparente original. Conserva las proporciones y un margen de seguridad del 5 %. Se utiliza en catálogo, categorías, carrito, ficha y miniaturas. No altera los píxeles ni tiñe los productos para disimular un fondo.

Los encuadres y las galerías se definen en `src/app/product-image-data.ts`. Si sustituyes un archivo, actualiza sus dimensiones y los límites de la zona visible. Para una foto nueva sin metadatos, se utiliza un ajuste completo sin recortar.

## Instalaciones existentes

Después de copiar el proyecto, desde `server`:

```powershell
npm run build
npm run db:images
```

Esta migración cambia únicamente la foto y la revisión de cada producto conocido. Conserva precios, existencias y pedidos; valida el nombre para evitar asignar una imagen a otro producto. Es seguro repetirla. Las bases de datos nuevas reciben las imágenes locales con `npm run db:init`.

Reinicia el frontend una vez tras cambiar `angular.json`: Ctrl+C y `npm start` desde la raíz de `tech-mobile-store`. Las imágenes se sirven desde `/imgs/products/` y se incluyen en la compilación de producción; no requieren conexión con los fabricantes para mostrarse.

## Comprobaciones

Desde la raíz del proyecto, `npm run test:images` comprueba archivos, dimensiones, coherencia de galerías y encuadres. Con el frontend en el puerto 4200, `npm run test:images -- --http` comprueba también la descarga de las 50 imágenes.
