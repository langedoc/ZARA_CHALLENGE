# ZARA CHALLENGE SMARTPHONES

Es una aplicación web a base de Next.js enfocada en la visualización, búsqueda y gestión de un catálogo de teléfonos móviles.

## Features

- Visualización de un catálogo de teléfonos móviles.
- Búsqueda en tiempo real de teléfonos por diferentes criterios.
- Vista detallada de un teléfono seleccionado.
- Posibilidad de agregar productos al carrito de compra y eliminarlos de el.
- Interfaz de usuario intuitiva y responsiva.
- Integración con una API para obtener datos actualizados de los teléfonos.

## Technologies Used

- Next.js (v15.1.0)
- React (v19.0.0)
- React Query
- Axios
- React Icons
- React Router DOM
- Vitest

## Architecture and Project Structure

La aplicación sigue una arquitectura basada en componentes y aprovecha las capacidades de Next.js para el renderizado del lado del servidor (SSR) y la generación estática (SSG). 

### Estructura del proyecto

```plaintext
/src
    ├── app
        ├── api                    # Servicios para interactuar con la API
        ├── cart                   # Página y lógica relacionadas con el carrito de compras
        ├── components             # Componentes reutilizables de la UI
            └── ClientProvider.js  # Componente para manejar el cliente de React Query y mantener los principios de renderizado del lado del servidor (server-first) de Next.js
        ├── phone                  # Página y lógica relacionadas con la vista detallada de teléfonos
        ├── globals.css            # Estilos globales de la aplicación
        ├── layout.tsx             # Diseño global de la aplicación
        ├── page.jsx               # Página principal de la aplicación
        └── page.module.css        # Estilos específicos de la página principal
    ├── context                    # Contextos globales para manejar estados compartidos
    ├── hooks                      # Custom hooks para lógica reutilizable
```
### Principios clave de la arquitectura

- **Modularidad:** La estructura está diseñada para separar responsabilidades, facilitando el mantenimiento y escalabilidad.
- **Uso del directorio `app` de Next.js:** Organiza las páginas y componentes de manera lógica, aprovechando las rutas de Next.js.
- **Gestión de estado:** El uso de contextos permite manejar estados globales como el del carrito de compras.
- **Reutilización de lógica:** Los hooks personalizados encapsulan lógica reutilizable, evitando la duplicación de código.
- **Seguridad de la API Key:** Las claves API se almacenan en un archivo `.env` durante el desarrollo, pero deben manejarse en el backend en producción para mayor seguridad.
- **Organización de estilos:** Los estilos globales y específicos están separados, lo que facilita el mantenimiento y la legibilidad del código.


## Getting Started

### Prerequisitos

- npm o yarn como gestor de paquetes

### Instalación

1. Clona el repositorio:

```bash
https://github.com/langedoc/ZARA_CHALLENGE.git
```
2. Instala las dependencias:

```bash
npm install
```
3. Configura tu clave API:

- Crea un archivo `.env` en la raíz del proyecto.
- Agrega tu clave API al archivo `.env` con el siguiente formato:

```bash
NEXT_PUBLIC_API_KEY=TU_CLAVE_API
```

> Nota: Este método de almacenamiento se utiliza únicamente para simplificar el desarrollo local. En un entorno de producción, las claves API deben manejarse en el backend o a través de servicios seguros para evitar posibles vulnerabilidades.

> Importante: Asegúrate de que el archivo .env esté listado en tu .gitignore para evitar exponer información sensible en repositorios públicos.

### Ejecutando la Aplicación

Modo de desarrollo:

```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

Compilación para producción:

```bash
npm run build
```

Iniciar servidor de producción:

```bash
npm run start
```
### Testing

Ejecutar pruebas:

```bash
npm test
```

Verificar cobertura de pruebas:

```bash
npx vitest --coverage
```



