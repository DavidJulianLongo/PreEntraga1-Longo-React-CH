# Proyecto Final - React JS (Coderhouse) - Comisión 60020

Este proyecto es parte de la segunda entrega del curso de React JS en Coderhouse. Es una aplicación de e-commerce creada con React que permite navegar por productos, filtrarlos por categoría y ver los detalles de cada producto.

## Características

- Visualización de productos desde una base de datos en Firestore.
- Filtro por categorías.
- Detalles de productos individuales.
- Carrito de compras básico.
- Integración de Firestore para el almacenamiento de datos.
- Estilo responsive con Bootstrap.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/DavidJulianLongo/PreEntraga2-Longo-React-JS-coderhouse.git
```

### 2. Instalar dependencias

Navega al directorio del proyecto e instala las dependencias necesarias:

```bash
cd PreEntraga2-Longo-React-JS-coderhouse
npm install
```

### 3. Configuración de Firestore

Debes configurar Firebase y Firestore para que la aplicación funcione correctamente.

1. Crea un proyecto en [Firebase](https://firebase.google.com/).
2. Agrega la configuración de Firebase en un archivo `.env` en la raíz del proyecto (ver sección **Variables de entorno** más adelante).
3. Habilita Firestore en tu proyecto de Firebase.

### 4. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las claves necesarias de Firebase:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
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

## Dependencias

- **React**: Librería para construir interfaces de usuario.
- **Firebase**: Base de datos en tiempo real.
- **React Router**: Para la navegación entre páginas.
- **React icons**: Para íconos de redes sociales.

