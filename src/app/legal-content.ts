export interface LegalPage {
  title: string;
  introduction: string;
  sections: { title: string; paragraphs: string[] }[];
}

// Drafts for the current demo, not ready-to-publish commercial legal notices.
export const LEGAL_PAGES = {
  privacidad: {
    title: 'Política de privacidad',
    introduction: 'Conoce qué información utiliza InfinityTech y para qué. En esta demo, utiliza siempre datos ficticios al probar los pedidos.',
    sections: [
      { title: 'Responsable y contacto', paragraphs: [
        'InfinityTech es el nombre de esta aplicación, no la identificación de una empresa. La identidad del responsable, su domicilio y el canal de contacto para cuestiones de privacidad están pendientes de completar por el titular del despliegue.',
        'Este documento describe la implementación actual. Antes de recoger datos personales reales deben definirse el responsable, las bases jurídicas y la información aplicable al servicio.'
      ] },
      { title: 'Información que utiliza la aplicación', paragraphs: [
        'Al enviar un pedido se guardan el nombre, el correo electrónico y la dirección introducidos, junto con los productos, cantidades, total y estado del pedido. Se utilizan para probar el flujo de compra y su gestión desde administración. No se solicitan datos bancarios ni se envían correos de confirmación.',
        'Las cuentas de administración utilizan un correo, una contraseña almacenada mediante hash y una sesión con caducidad. El inicio de sesión mantiene temporalmente un contador de intentos por dirección IP para limitar intentos repetidos.',
        'El carrito se conserva en el navegador mediante almacenamiento local. La aplicación no integra herramientas de analítica ni publicidad.'
      ] },
      { title: 'Almacenamiento y conservación', paragraphs: [
        'Los pedidos y cuentas se almacenan en la base de datos PostgreSQL configurada por quien ejecuta el proyecto. Los pedidos de prueba no tienen borrado automático: permanecen hasta que el responsable del entorno los elimine.',
        'Las sesiones administrativas caducan a las ocho horas y se revocan al cerrar sesión correctamente. El carrito no tiene una caducidad automática; se puede vaciar desde la tienda o eliminar desde los datos del sitio en el navegador.',
        'Los proveedores de alojamiento, ubicación de los datos, posibles transferencias y plazos de conservación de un despliegue público están pendientes de definir. El código de la demo no permite asegurar cómo tratará los datos una infraestructura aún no configurada.'
      ] },
      { title: 'Tus derechos y uso responsable', paragraphs: [
        'La información de un servicio con datos reales debe explicar cómo solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad, cuando correspondan, y cómo reclamar ante la autoridad de protección de datos. El canal para ejercerlos ante el responsable debe completarse antes de ese uso.',
        'No introduzcas información sensible ni datos de otras personas en esta demo. Eliminar el carrito del navegador no elimina los pedidos que ya se hayan enviado al servidor.'
      ] }
    ]
  },
  cookies: {
    title: 'Política de cookies',
    introduction: 'Información sobre la cookie de acceso y el almacenamiento del carrito utilizados por esta versión de la aplicación.',
    sections: [
      { title: 'Cookie de administración: tm_admin', paragraphs: [
        'Es una cookie propia de autenticación que se establece al iniciar sesión como administrador. Permite al servidor comprobar la sesión en las rutas /api/admin. Su duración máxima es de ocho horas; al cerrar sesión correctamente se elimina la cookie y se revoca la sesión.',
        'Tiene los atributos HttpOnly y SameSite=Strict. En producción, la configuración activa Secure y requiere HTTPS. No se utiliza para publicidad ni para medir visitas.'
      ] },
      { title: 'Almacenamiento del carrito', paragraphs: [
        'Esta clave se guarda en localStorage: es almacenamiento del navegador, no una cookie. Conserva los productos y cantidades del carrito entre visitas al mismo sitio.',
        'No tiene vencimiento automático. Al vaciar el carrito o completar un pedido, su contenido se actualiza a una lista vacía. Puedes eliminar la clave borrando los datos del sitio desde tu navegador.'
      ] },
      { title: 'Analítica y servicios externos', paragraphs: [
        'El código actual no incorpora cookies de publicidad ni herramientas de analítica. Las imágenes y fuentes de la tienda se sirven como archivos locales. Los enlaces a fabricantes y a otras webs se rigen por las políticas de esos sitios cuando los visitas.',
        'Si se añaden servicios externos, analítica o publicidad, deben revisarse esta información y los controles de consentimiento antes de activarlos. También deben comprobarse las tecnologías que añada el proveedor de alojamiento.'
      ] },
      { title: 'Cómo gestionarlo', paragraphs: [
        'Puedes consultar o borrar las cookies y el almacenamiento desde los ajustes de privacidad de tu navegador, en los datos del sitio. Borrarlos puede cerrar tu sesión y eliminar tu carrito guardado.',
        'Esta versión no ofrece interruptores de cookies publicitarias porque no integra esas tecnologías. Las funciones de acceso y persistencia del carrito dependen del almacenamiento descrito arriba.'
      ] }
    ]
  },
  'aviso-legal': {
    title: 'Aviso legal',
    introduction: 'Información sobre el proyecto, sus contenidos y los límites de esta demostración.',
    sections: [
      { title: 'Identificación del proyecto', paragraphs: [
        'InfinityTech permite explorar un catálogo tecnológico, gestionar un carrito y realizar pedidos de prueba con administración autenticada. No constituye una tienda operativa ni una oferta comercial.',
        'Titular o razón social, identificación fiscal cuando proceda, domicilio y correo de contacto: pendientes de completar por el titular antes de una publicación que requiera estos datos. No se ha inventado una identidad empresarial para esta demo.'
      ] },
      { title: 'Uso del sitio', paragraphs: [
        'Puedes explorar el catálogo y probar sus funciones con información ficticia. No deben utilizarse para enviar datos de terceros, intentar acceder sin autorización a administración o interferir con el funcionamiento del servicio.',
        'El formulario no procesa pagos y los pedidos no generan envíos reales. Los precios, existencias y condiciones comerciales mostrados son datos de prueba.'
      ] },
      { title: 'Marcas, imágenes y contenidos', paragraphs: [
        'Apple, Samsung, Xiaomi y las demás marcas o nombres de producto pertenecen a sus titulares. Su aparición no implica afiliación, patrocinio ni condición de distribuidor autorizado.',
        'Las fotografías se incluyen con fines demostrativos y su procedencia se documenta en el proyecto. La disponibilidad de una imagen no equivale a una licencia para su explotación comercial; los permisos deben revisarse antes de reutilizar los contenidos públicamente.'
      ] },
      { title: 'Enlaces y revisión del documento', paragraphs: [
        'Los enlaces a fabricantes permiten consultar sus fichas oficiales. Sus contenidos y políticas dependen de sus respectivos titulares.',
        'Este texto es un borrador informativo, no una garantía de cumplimiento legal. Debe adaptarse a la identidad, actividad, alojamiento y jurisdicción del responsable antes de utilizarse como aviso de un servicio real.'
      ] }
    ]
  },
  condiciones: {
    title: 'Condiciones de compra',
    introduction: 'Así funciona el pedido de prueba en InfinityTech. No hay cobros ni entregas de productos reales.',
    sections: [
      { title: 'Catálogo y precios', paragraphs: [
        'Los importes se muestran en euros y son datos de demostración, no tarifas oficiales de los fabricantes. Las existencias representan unidades de prueba en la base de datos.',
        'La API comprueba los productos y sus existencias, calcula el total y descuenta las unidades al guardar un pedido. El precio definitivo del pedido de prueba se calcula en el servidor.'
      ] },
      { title: 'Pedido y pago', paragraphs: [
        'Puedes añadir productos al carrito y enviar el formulario con nombre, correo y dirección ficticios. La confirmación muestra la referencia y el total guardados en la base de datos.',
        'No se introduce ninguna tarjeta, no se realiza ningún cargo y no se envía correo. El estado pendiente de pago y la opción administrativa de marcar pagado simulan el proceso; no ejecutan un pago.'
      ] },
      { title: 'Envíos y devoluciones', paragraphs: [
        'El cálculo del envío añade 4,99 € a pedidos inferiores a 50 € y 0 € a partir de 50 €. No hay transportista ni un plazo de entrega real.',
        'La mención a 30 días para devoluciones en la portada es ilustrativa. No existe un proceso de devolución de mercancía real. Desde administración se puede cancelar un pedido pendiente y reponer su stock de prueba.'
      ] },
      { title: 'Antes de una venta real', paragraphs: [
        'El titular deberá definir y revisar precios e impuestos, medios de pago, entrega, atención al cliente, cancelación, desistimiento, devoluciones y garantías aplicables. Estas condiciones de demostración no sustituyen las de una actividad comercial real.'
      ] }
    ]
  }
} satisfies Record<string, LegalPage>;
