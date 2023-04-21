![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **PF - Henry: El Campito Refugio ONG**

La app está contruida con React, Redux, Node, Express y MongoAtlas entre otras.

## Objetivos del Proyecto

Atar de manera dinámica los contenidos de la interfaz de usuario a información guardada en las tablas de base de datos y que estos puedan ser editados desde el Panel Admin.

Deberán verificar, en principio, las rutas existentes de consulta al Back/DB, y crear las faltantes para crear y guardar los elemento (texto, fotografías, etc) necesarios para renderizar en la interfaz de usuario; y que estás pueda ser cambiado a lo largo del tiempo por personal autorizado de la ONG desde el dashboard de administración. Así también, crear las tablas/schemas en la base de dato para el guardado de los mismo.

La implementación deseada requiere cambios tanto a nivel de Frontend, de Backend y de Base de Datos. Hecho que requiere en una primera instancia recorrer toda la estructura de la app para conocer sus componentes, y comprender que nuevos componentes requieren ser creados, siguiendo las buenas prácticas, una arquitectura lógica y ordenada, y la mayor claridad para la lectura de proximos equipos de desarrollos que trabajen sobre las aplicación.

<img height="350" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671750561/refugio/readme/logoElCampito_za9dew.jpg" />

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` desde la consola hacer: 
```env
npm i
```
*Instalara las dependencias para el Back desde `package.json`.

En `api` podrá encontrar además del archivo `index.js` (para levantar la app y sicronizar con la DB), un archivo `app.js` con los midlewares iniciales. 
Además encontramos los folders:

- [config] ---> aquí se configura la base de datos usando la dependencia Mongoose.
- [models] ---> para crear las tablas de la `DB`.
- [routes] ---> para crear las rutas que va a consumir el `front`.
- [controllers] ---> para descongestionar de código en las `rutas` y generar la lógica necesaria para las mismas aquí.
- [util] ---> para alojar funciones más complejas y extensas y reducir código en los `controllers`.
- [middlewares] ---> para alojar los middleware que se colocan entre los `req`y los `res` de los `controllers`.

En `api` crear un archivo llamado: `.env` que tenga las `variables de entorno`:

```env
USER = elcampito 
PASS = ZoSzoSTtKgz8vhdb
NAME_DB = dbapi
PORT = 3001
FRONT = 3000
SECRET = pepillo
TOKEN_SECRET=123
GMAIL_PASSWORD=gfbjvbpweuafacmp
GMAIL_USER=elcampitorefugiodev@gmail.com
ACCESS_TOKEN =  APP_USR-5942738066993730-010207-4b1a981dd2a465926e617e0a7b156c78-1277420535
PAYPAL_API_CLIENT=ATxN-COATDrhTAh2FTj46MY9VUMs3L02fcECHcXoCghkp8R_k3bmCngi2X-7SYDfu10JUItC6YxuWIck
PAYPAL_API_SECRET=EIjHmxUb-KpivT9E2QY53MfQbZTkstZzmjXvx4GCaEzIvnBEGd7D6p55qGezE56BxSmaUzkXMaHWBQQH
PAYPAL_API=https://api-m.sandbox.paypal.com
```

**client**

El contenido de `client` fue creado usando: Create React App, y revestido de las dependencias necesarias para implementar Redux.

En `api` desde la consola hacer: 
```env
npm i
```
*Instalara las dependencias para el Front desde `package.json`.

En `client` podrá encontrar, dentro de `src`, además del archivo `index.js` (con el ReactDOM) y `app` (con las rutas del front), los siguientes folders:

- [assets] ---> para incorporar todo tipo de archivo multimedia (imagenes, videos, tutoriales, audios).
- [components] ---> modularizamos aqui todos los componentes.
- [redux] ---> aqui `actions.js`, `reducer.js` y `store.js` para el manejo de un store global.

<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671750561/refugio/readme/front_bwpmeg.png" />

#### dentro de /components

- [ ControlledActions ] ---> componentes con un grado de control como login, register, etc.
- [ Forms ] ---> formularios para la interrelación con el usuario.
- [ ReactAdmin ] ---> componentes que conforman el Panel de Administrador.
- [ UserInterface ] ---> componentes de la interfaz de usuario.
- y otros...

## **Branches**

Para un manejo ordenado se recomienda crear una rama nueva por cada función o componente a trabajar...y una vez aprobado y mergeado pasar a eliminar la rama, para evitar una lista indefinida de ramas. De esa forma solo quedarnos con las ramas activas.

Eliminar ramas por `consola`:

```
// para borrar la branch local
git branch -d myRama

// para borrar la branch remota
git push origin --delete myRama

```

Por otro lado, `github` tiene un boton para eliminar ramas remotas.

Para la creación de nuevas ramas seguir las siguientes líneas:

```
git checkout -b myRama

git pull origin developer
// nos actualiza los últimos cambios a partir de la rama de desarrollo

```

## **Enunciado**

Proyecto Full Web Stack de un portal web para dar a publicidad la acción de la ONG el campito Refugio.
El usuario podrá además de tomar conocimiento, realizar donaciones, solicitar visitas, convertirse en voluntarios entre otros.
El administrador podrá, a través de un panel de administración, incorporar diferentes input, desde información, nuevos perros, cambio de fotografías, podrá borrar, modificar o confimar roles de usuario...

#### Tecnologías usadas

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] MongoAtlas - Mongoose

#### Plataformas de apoyo organizacional

- [ ] GitHub ---> alojamos el repositorio de trabajo compartido.
      https://github.com/rodrigoebravo/el-campito-refugio-henry/tree/developer
- [ ] Trello ---> Configuramos las `U.S.` y creamos las tareas para ser tomadas por los miembros del equipo. Establecemos un procesos de avance en columnas.
      https://trello.com/b/Vj8ybG92/kanban-template
- [ ] Figma ---> Tenemos el maquetado de la app y su perfil estético.
      https://www.figma.com/file/1J1oyIBmnfcyyrSXy0qGw3/El-Campito-Refugio-Web?node-id=0%3A1git
- [ ] Postman ---> Montamos las rutas del `back` para prueba y visualización.
      https://galactic-shadow-340263.postman.co/workspace/Team-Workspace~f4a73fa3-c45a-4be0-8a53-895b1b65676d/collection/20469022-c6d4459b-582c-4b0e-9744-9e1223d9ebfe?ctx=documentation

#### Formularios en Drive

- Voluntario: https://docs.google.com/forms/d/e/1FAIpQLSfzfLy6YUVtZjIEKod3G4uvUmjZwhE3gsLdTmdTZplgtyBeow/viewform
- Adopción: https://docs.google.com/forms/d/1Fub4ZXrLIFDk0qaKhO3btWn-rX3hvmgeLYpi98wBbbI/viewform?edit_requested=true

# Testing

- [ ] Al menos tener 5 componentes del frontend con sus tests respectivos
- [ ] Al menos tener 5 rutas del backend con sus tests respectivos
- [ ] Al menos tener 5 modelos de la base de datos con sus tests respectivos

# Equipo de Desarrollo: 

...

## **views**

Algunas vistas de diseño mobile...

<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-11-47-481_com.mi.globalbrowser_fjm7x4.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-12-37-664_com.mi.globalbrowser_oslvbv.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-12-26-103_com.mi.globalbrowser_qtqa2v.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-13-07-263_com.mi.globalbrowser_toqyxs.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-12-08-836_com.mi.globalbrowser_r0q4tg.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-14-17-624_com.mi.globalbrowser_c574rh.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-14-07-769_com.mi.globalbrowser_fgmt4a.jpg" />
<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671748721/refugio/mobile/Screenshot_2022-12-21-09-13-12-754_com.mi.globalbrowser_dgkehb.jpg" />

## Diagrama de relaciones de la DB hasta diciembre de 2022

La app contara con una base de datos dinamica que permitira almacenar datos y relacionarlos de manera tal de presentar al administrador información útil y sensible para asistirlo en sus funciones organizacionales.

<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671750561/refugio/readme/diagramaDB_za9a3h.jpg" />

## Panel de Aministrador

Desde el Panel de Administrador podrán consultar todas las tables de la base de dato, crear nuevos input y editarlos en caso de requerir modificaciones.

```env
USUARIO DE PRUEBA PARA EL PANEL DE ADMINISTRACIÓN:

usuarioAdministradorDev@gmail.com
Pass: admin123
```

<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671750561/refugio/readme/admin_mayyzz.jpg" />

<img height="400" src="https://res.cloudinary.com/dakezkhho/image/upload/v1671750561/refugio/readme/adminUser_ywlyfk.jpg" />

## Rutas del Backend: https://documenter.getpostman.com/view/20469022/2s8YzP14Vm
