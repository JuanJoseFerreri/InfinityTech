# Catálogo e imágenes

Actualizado el 14/09/2026: nueve productos. Nuevos: iPhone 17, Galaxy S25
y Xiaomi Buds 5 Pro. Los precios iniciales de esos modelos son referencias
de lanzamiento para la demo, editables en administración.

Fuentes oficiales:
- https://www.apple.com/es/newsroom/2025/09/apple-introduces-iphone-17/
- https://news.samsung.com/es/personaliza-tu-experiencia-de-la-serie-galaxy-s25-con-colores-exclusivos-y-ofertas-especiales-en-samsung-com
- https://www.mi.com/es/support/terms/xiaomi-15-series/

Las imágenes se enlazan desde las páginas oficiales de Apple, Samsung y Xiaomi.
Sus URL están en src/seed.ts y se guardan en products.image_url.
Requieren conexión a Internet; si una URL falla, la tienda muestra un icono.
Las fotografías son material de los fabricantes y no incluyen una licencia
de redistribución concedida por este proyecto.

npm run db:init añade nuevos productos y rellena imágenes vacías sin modificar
los precios, las existencias o los datos editados de productos existentes.
Los nuevos productos reciben 20 unidades ficticias de demostración.
