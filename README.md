# Proyecto Final - React JS (Coderhouse) - Comisión 60020

Este es el proyecto final del curso de React JS en Coderhouse. Es una aplicación de e-commerce creada con React que permite navegar por productos, filtrarlos por categoría y ver los detalles de cada uno. Tambien simular una compra, con un carrito, un formulario y una orden de compra.

## Características

- Visualización de productos desde una base de datos en Firestore.
- Filtro por categorías.
- Detalles de productos individuales.
- Carrito de compras básico.
- Integración de Firestore para el almacenamiento de datos.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/DavidJulianLongo/PreEntraga2-Longo-React-JS-coderhouse.git
```

### 2. Instalar dependencias

Instala las dependencias necesarias:

## Dependencias

- **react**: Librería para construir interfaces de usuario.
- **firebase**: Base de datos.
- **react-router-dom**: Para la navegación entre páginas.
- **react-icons**: Para íconos de redes sociales.
- **bootstrap**: Para algunos estilos.
- **react-loading**: Para el loading al cargar orden de compra.


### 3. Configuración de Firestore

Debes configurar Firebase y Firestore para que la aplicación funcione correctamente.

1. Crea un proyecto en [Firebase](https://firebase.google.com/).
2. Habilita Firestore en tu proyecto de Firebase.

### 4. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las claves necesarias de Firebase:

```
VITE_FIREBASE_API_KEY= your-api-key
VITE_FIREBASE_AUTH_DOMAIN= your-auth-domain
VITE_FIREBASE_PROJECT_ID= your-project-id
VITE_FIREBASE_STORAGE_BUCKET= your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID= your-messaging-sender-id
VITE_FIREBASE_APP_ID= your-app-id
```

### 5. Iniciar el servidor de desarrollo

Inicia la aplicación localmente con el siguiente comando:

```bash
npm run dev
```


## Uso

- Navega por las categorías de productos.
- Haz clic en cualquier producto para ver los detalles.
- Agrega productos al carrito.
- Visualiza los productos agregados en el carrito.
- Completa el formulario para finalizar la compra.
- Obtén la orden de compra.


## Navegación

La aplicación permite a los usuarios navegar a través de diferentes productos y categorías mediante un sistema de rutas utilizando **React Router**.

- En la página principal, se listan todos los productos disponibles, con la opción de filtrar por categorías específicas.
- Cada categoría tiene su propia ruta, y al seleccionarla, se filtrarán y mostrarán solo los productos pertenecientes a esa categoría.
- El detalle de cada producto está disponible al hacer click en el botón 'ver mas' en un producto específico, lo que redirige a una ruta única basada en el id del producto.

### Rutas importantes:

- **`/`**: Muestra todos los productos.
- **`/category/:model`**: Filtra y muestra los productos de una categoría específica.
- **`/item/:id`**: Muestra los detalles de un producto específico.
- **`/:cart`**: Muestra el carrito de compras, con una tabla donde se muestra el detalle de los productos agragados. Tambíen un formulario, que es requerido para finlaizar la compra. Al finalizar la compra se obtine la orden de compra, con el id de la orden , los datos del cliente proveniente del formulario, y el detalle de los productos.

## ItemDetailContainer

El componente `ItemDetail` es el encargado de mostrar los detalles completos de un producto seleccionado. Al hacer click en el botón "ver mas" en cualquier producto desde la lista de productos, se navega a una página de detalle única para ese producto.

### Funcionalidad

- **Datos del producto**: Muestra información detallada del producto seleccionado, como su nombre, descripción, precio, imágenes y características.
- **Cambio de imágenes**: Si el producto tiene múltiples imágenes (por ejemplo, diferentes colores), el usuario puede alternar entre ellas.
- **Agregar al carrito**: Incluye un botón que permite agregar el producto al carrito de compras. Esta acción utiliza el contexto global del carrito para almacenar el estado del carrito en toda la aplicación. El componente recibe el `id` del producto como parámetro en la URL y consulta la base de datos Firestore para obtener la información detallada de dicho producto.
- **Generar orden de compra**: Genera una orden de compra tomando los datos del usuario de un formulario y los detalles del producto, y los almacena en firestore. Luego genera la orden de compras


## Funcionalidades Adicionales

- **Persistencia del Carrito**: Utiliza `localStorage` para guardar el estado del carrito. Esto permite que los productos agregados al carrito se mantengan incluso después de cerrar y reabrir el navegador. Al cargar la aplicación, el carrito se inicializa con los datos almacenados en `localStorage`, asegurando una experiencia fluida para el usuario.
- **Restricción durante la Orden de Compra**: Al generar la orden de compra, no se pueden agregar productos al carrito hasta que la orden sea cerrada. Esto evita confusiones y asegura que el proceso de compra sea claro y fluido para el usuario.
