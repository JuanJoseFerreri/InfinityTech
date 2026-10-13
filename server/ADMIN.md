# Panel de administración

Desde server, detén la API con Ctrl+C y ejecuta:

```powershell
npm run build
npm run db:init
```

La migración añade admins, admin_sessions y products.revision.
Conserva productos, stock y pedidos existentes.

Añade temporalmente a server/.env:

```env
ADMIN_EMAIL=tu-correo@example.com
ADMIN_PASSWORD=elige-una-clave-de-al-menos-12-caracteres
```

Sustituye los valores por los tuyos y ejecuta:

```powershell
npm run admin:create
```

Elimina ADMIN_PASSWORD de .env después de crear la cuenta. No envíes la contraseña
por chat. El comando no sobrescribe cuentas existentes.

Arranca la API con npm start y Angular desde la raíz con npm start.
Abre http://localhost:4200/admin e inicia sesión con tu cuenta.

Puedes editar nombre, descripción, precio y stock de los productos existentes,
consultar pedidos paginados y marcar pendientes como pagados o cancelados.
Cancelar devuelve el stock una sola vez. Los pedidos pagados y cancelados quedan
cerrados; marcar pagado es un registro manual, no ejecuta un cobro.
El botón Recargar datos descarta las ediciones sin guardar. Guardar un producto
también recarga la lista: termina una ficha antes de editar la siguiente.

Las sesiones duran ocho horas y se guardan en PostgreSQL con el token hasheado.
La cookie es HttpOnly y SameSite=Strict; en NODE_ENV=production requiere HTTPS.
Las contraseñas usan scrypt con sal aleatoria. El login permite diez intentos
por IP cada quince minutos (limitación en memoria para esta instancia local).
El servidor exige la cabecera X-Admin-Request para operaciones de escritura.

Comprobaciones:

1. Sin sesión, /api/admin/orders y /api/admin/products responden 401.
2. Una contraseña incorrecta no da acceso.
3. Edita un producto, guarda y verifica el cambio en la tienda al recargar.
4. Cancela un pedido pendiente: se repone el stock, una única vez.
5. Si se vende un producto mientras está abierto en el editor, guardar devuelve
   conflicto; recarga para obtener las unidades actualizadas.
6. Cierra sesión: se revoca la sesión del servidor.

Para ejecutar comprobaciones automáticas sin modificar la base:
node smoke.mjs
