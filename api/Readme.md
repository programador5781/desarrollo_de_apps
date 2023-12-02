# Desarrollo de App's 
## Universidad de Cartagena - Centro Tutorial Mompox
### Facultad de Ingeniería - Ingeniería de Software - VI Semestre 2023-2



# Backend (API)

Este es el backend (API) para el proyecto "TCC". Proporciona la lógica del servidor para gestionar datos relacionados con videojuegos.

## Requisitos previos

Asegúrate de tener instalados los siguientes requisitos en tu máquina local:

- [Node.js](https://nodejs.org/) (vXX o superior)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/) (base de datos)

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

-  **Node**: v18.16.1 o mayor
-  **NPM**: 9.2.0 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

## Configuración del entorno

Sigue estos pasos para configurar el entorno de desarrollo:

### Clonar el repositorio

```bash
git clone https://github.com/programador5781/desarrollo_de_apps.git
cd desarrollo_de_apps
```

## Crear la base de datos
Abre PostgreSQL en tu máquina.

Crea una nueva base de datos llamada **videogames** mediante la interfaz de PostgreSQL o ejecutando el siguiente comando SQL desde la Shell de postgres:

```sql
CREATE DATABASE videogames;
```
## Instalar dependencias

```bash 
npm install
```

## Configurar variables de entorno

Crea un archivo .env en la raíz del proyecto y agrega las variables de entorno necesarias (por ejemplo, configuración de la base de datos, claves de API, etc.).

```js
DB_USER=user_Postgres
DB_PASSWORD=password_Postgres
DB_HOST=localhost

API_KEY=<aquí coloca tu api key>
```
reemplaza user_Postgres con tu usuario de postgres igualmente password_Postgres con tu password de postgres.   
En el caso de la API_KEY debes gestionar una cuenta en:  
[**rawg**](https://rawg.io/apidocs)


## Ejecutar la aplicación  

```bash
npm start
```
La aplicación se ejecutará en http://localhost:3001   



# Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.   


##### programador5781 - RKD - 2023