# Backend propio: PostgreSQL + Node.js + TypeScript

## 1. Instalar PostgreSQL en Windows

Instalador oficial: https://www.postgresql.org/download/windows/
Instala PostgreSQL y pgAdmin. No requiere Docker ni virtualización.
Mantén el puerto 5432 y guarda la contraseña del administrador postgres.

En pgAdmin, conecta al servidor y abre Query Tool sobre la base postgres.
Ejecuta estas instrucciones por separado, sustituyendo la contraseña:

```sql
CREATE ROLE tecnomovil LOGIN PASSWORD 'TU_CLAVE_LOCAL';
CREATE DATABASE tecnomovil OWNER tecnomovil;
```

La API usa ese usuario dedicado, no el administrador postgres.

## 2. Preparar la API

Desde la carpeta server:

```powershell
npm install
Copy-Item .env.example .env
```

Edita .env con la contraseña elegida. Si contiene caracteres especiales, codifícalos
para una URL (por ejemplo @ como %40). No compartas ni subas .env a Git.

```powershell
npm run build
npm run db:init
npm start
```

db:init crea las tablas e inserta los seis productos existentes con 20 unidades
de ejemplo. Puede repetirse: no repone stock ni sobrescribe precios existentes.
Los precios heredados del prototipo son datos de demostración, no una tarifa
actualizada automáticamente de los fabricantes.

## 3. Arrancar Angular

En otra terminal, desde la carpeta tech-mobile-store:

```powershell
npm start
```

Abre http://localhost:4200. Reinicia Angular si estaba abierto antes del cambio
de proxy. Las peticiones /api se reenvían a http://127.0.0.1:3000.
Sin la API/base de datos el catálogo muestra un mensaje de error con reintento.

## Rutas

- GET /api/health comprueba la conexión con PostgreSQL.
- GET /api/products consulta productos, marcas, categorías, precios y stock.
- POST /api/orders valida comprador y cantidades, calcula precios/envío en
  céntimos, guarda pedido y líneas y descuenta stock con bloqueo de filas.
  requestId debe ser UUID: los reintentos idénticos devuelven el mismo pedido.
  No se aceptan precios enviados por el cliente.

Los pedidos quedan pendientes de pago. No se procesa ningún cobro ni se manda
correo. No hay rutas públicas para consultar los datos personales de pedidos.
El servicio escucha solo en 127.0.0.1 para desarrollo local.
Antes de publicarlo faltan autenticación de administración, limitación de
peticiones, gestión de cancelaciones/pagos y configuración de HTTPS.

## Verificación manual con la base arrancada

1. GET http://127.0.0.1:3000/api/health debe responder {"status":"ok"}.
2. Añade un producto y envía el formulario vacío: debe impedir el pedido.
3. Completa datos válidos: la pantalla muestra referencia y total confirmado.
4. En pgAdmin verifica orders, order_items y el stock de products.
5. Reinicia la API: el pedido y el stock deben persistir.
6. Un pedido que supere el stock debe devolver 409 y no insertar ninguna línea.

Esquema: brands, categories, products, orders y order_items.
schema.sql es la primera versión del esquema; para futuros cambios añade
migraciones SQL versionadas en vez de modificar tablas manualmente.
