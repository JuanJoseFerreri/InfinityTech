# InfinityTech

Ejemplo de tienda online responsive para móviles y periféricos, hecha con Angular y TypeScript.

## Puesta en marcha

```bash
npm install
npm start
```

Después, visita `http://localhost:4200`.

## Incluye

- Catálogo de productos con búsqueda y filtros por categoría.
- Carrito lateral con selector de unidades y persistencia en `localStorage`.
- Resumen de pedido y confirmación de compra simulada.
- Diseño responsive, sin recursos externos.

## Acceso a administración

Los visitantes ven «Iniciar sesión», que abre `/login`. Se utilizan las cuentas de administrador existentes; no se han creado cuentas de cliente ni registro público. Después de validar la sesión con el servidor, la tienda muestra «Panel de administrador» y «Cerrar sesión».

El acceso directo a `/admin` requiere una sesión válida y, en caso contrario, redirige a `/login`. La API sigue protegiendo todas las operaciones administrativas mediante la cookie HttpOnly y la sesión almacenada en PostgreSQL. Ocultar el enlace no reemplaza esta protección. El formulario de inicio de sesión es público y mantiene el límite de intentos existente.

Pruebas: `npm run test:auth`. Con la web y la API arrancadas, `npm run test:auth -- --http` comprueba además el rechazo de peticiones anónimas. Las pruebas del inicio de sesión usan respuestas simuladas, sin acceder con contraseñas reales.

## Fotografías locales

Las fotografías se guardan en `public/imgs/products/`. Consulta [IMAGENES.md](IMAGENES.md) para ver cómo se encuadran, actualizar una base de datos existente y ejecutar las comprobaciones.

## Navegación con Angular Router

La aplicación se arranca una sola vez desde `src/main.ts`. `RootComponent` contiene el `RouterOutlet`, y `src/app/app.routes.ts` declara las pantallas con carga diferida:

- `/`: tienda (`AppComponent`), catálogo y carrito.
- `/login`: inicio de sesión; tras validarlo vuelve a la tienda.
- `/admin`: administración; `admin.guard.ts` consulta la sesión del servidor antes de activar el panel. Sin sesión o si falla la comprobación, redirige a `/login`.
- Cualquier ruta desconocida redirige a `/`.

Los enlaces usan `RouterLink` y las redirecciones usan `Router`, sin recargar el documento. Las secciones de la tienda conservan `/#inicio`, `/#tienda`, `/#categorias` y `/#beneficios`. La configuración restaura el desplazamiento al volver atrás y permite repetir un enlace a la misma sección. El carrito sigue persistiendo en `localStorage` al cambiar de pantalla.

En producción, el servidor que aloje el frontend debe devolver `index.html` para rutas de la aplicación como `/login` y `/admin` (fallback SPA). No se debe aplicar ese fallback a `/api` ni a recursos estáticos inexistentes. `ng serve` ya permite abrir o recargar estas rutas directamente.

### Comprobación del cambio

```bash
npm run build
npm run test:auth
npm run test:routing
```

Los scripts comprueban los contratos de autenticación, las rutas y las redirecciones con respuestas HTTP e inyección simuladas, sin modificar cuentas ni la base de datos. No sustituyen una prueba completa en navegador.

Prueba manual con frontend y backend arrancados: entrar en `/admin` sin sesión, iniciar sesión con una cuenta autorizada, abrir el panel, volver a la tienda, usar atrás/adelante y cerrar sesión. Comprueba también la recarga directa de `/login` y `/admin`, los enlaces a secciones (incluido repetir categoría) y la conservación del carrito.

## Formato y mantenimiento del frontend

Las plantillas HTML y hojas CSS de `src/` se formatean con Prettier, fijado en `devDependencies`. La configuración está en `.prettierrc.json`: dos espacios, líneas de referencia de 100 caracteres y parser Angular para `*.component.html`. Se conserva la sensibilidad a espacios del HTML para no separar textos unidos como el logotipo.

```bash
npm run format
npm run format:check
```

El primer comando aplica el formato; el segundo lo comprueba sin modificar archivos. Ambos se limitan al HTML y CSS del frontend. Los estilos y la plantilla de las fotografías están en `product-image.component.css` y `product-image.component.html`; su lógica de encuadre permanece en TypeScript.

Las galerías activas se mantienen en `src/app/product-image-data.ts`. Se han retirado las antiguas galerías de URLs remotas y los estilos que dependían de las imágenes anteriores. No se han eliminado fotografías locales ni datos de productos. Las reglas para estados dinámicos, errores, imágenes no disponibles, tamaños móviles y movimiento reducido siguen formando parte del diseño.

## Footer y páginas informativas

`SiteFooterComponent` se muestra desde el componente raíz, también en login, administración y páginas legales. Sus enlaces usan Angular Router y el diseño se adapta a escritorio, tablet y móvil.

- `/privacidad`: datos que utiliza el proyecto, conservación y aspectos pendientes del responsable.
- `/cookies`: cookie administrativa `tm_admin` (ocho horas) y carrito en `localStorage` (`tecnomovil-cart-v2`, sin caducidad automática).
- `/aviso-legal`: naturaleza del portfolio, identificación pendiente y atribución de marcas e imágenes.
- `/condiciones`: pedidos, pago, envío y devolución simulados.

Los textos están centralizados en `src/app/legal-content.ts`. Son borradores para esta demo, no una certificación de cumplimiento. Antes de recoger datos reales o lanzar una tienda hay que identificar al titular, facilitar un contacto válido, definir las bases jurídicas, conservación, proveedores y condiciones aplicables, y revisar los textos con asesoramiento adecuado. No se han inventado datos de empresa ni canales de contacto.

Referencias consultadas: [derecho de información de la AEPD](https://www.aepd.es/derechos-y-deberes/conoce-tus-derechos/derecho-de-informacion) y [guía de cookies de la AEPD](https://www.aepd.es/guias/guia-cookies.pdf). La implementación actual no incorpora analítica ni publicidad; añadir servicios de ese tipo requiere revisar su tratamiento y los controles de consentimiento antes de activarlos. Los avisos del checkout siguen indicando que no hay pagos reales.
