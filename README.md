![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# __PF - Henry: El Campito Refugio ONG__

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y MongoDB entre otras.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Practicar métodos de SCRUM.


<img height="500" src="client/src/assets/logoElCampito.jpg" />



## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` podrá encontrar además del archivo `app.js` (para levantar la app y sicronizar con la DB).
Además encontramos los folders:
- [config] ---> aquí se configura la base de datos usando la dependencia Mongoose.
- [models] ---> para crear las tablas de la `DB`.
- [routes] ---> para crear las rutas que va a consumir el `front`.
- [controllers] ---> para descongestionar de código en las `rutas` y generar la lógica necesaria para las mismas aquí.
- [util] ---> para alojar funciones más complejas y extensas y reducir código en los `controllers`.
- [middlewares] ---> para alojar los middleware que se colocan entre los `req`y los `res` de los `controllers`.


En `api` crear un archivo llamado: `.env` que tenga las `variables de entorno`:

```env
USER = reuht
PASS = YbbTtnRbBGBHb1jf
NAME_DB = dbapi
PORT = 3001
FRONT = 3000
SECRET = pepillo
```


__client__


El contenido de `client` fue creado usando: Create React App, y revestido de las dependencias necesarias para implementar Redux.


En `client` podrá encontrar, dentro de `src`, además del archivo `index.js` (con el ReactDOM) y `app` (con las rutas del front), los siguientes folders: 

- [assets] ---> para incorporar todo tipo de archivo multimedia (imagenes, videos, tutoriales, audios).
- [components] ---> modularizamos aqui todos los componentes.
- [hooks] ---> además de todos los hooks nativos de  `react` podemos crear nuestros propios hooks funcionales que realicen alguna acción dentro de los componente, pero que extraemos el código y lo ponemos aquí para no recargar el componente y que quede por demás extenso. En la medida de lo posible, la lógica siempre fuera del componente.
- [redux] ---> aqui `actions.js`, `reducer.js` y `store.js` para el manejo de un store global.
- [styles] ---> aquí todos los archivos de estilos modularizados que serán llamados luego por los componentes.


<img height="500" src="client/src/assets/front.png" />


## __Enunciado__

Proyecto Full Web Stack de un portal web para dar a publicidad la acción de la ONG el campito Refugio. 
El usuario podrá además de tomar conocimiento, realizar donaciones, solicitar visitas, convertirse en voluntarios entre otros.
El administrador podrá, a través de un panel de administración, incorporar diferentes input, desde información, nuevos perros, cambio de fotografías, podrá borrar, modificar o confimar roles de usuario... 


#### Tecnologías usadas
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] MongoDB - Mongosse

#### Plataformas de apoyo organizacional

- [ ] GitHub ---> alojamos el repositorio de trabajo compartido.
    https://github.com/SoyDento/Proyecto2022/blob/addTrello/README.md
- [ ] Trello ---> Configuramos las `U.S.` y creamos las tareas para ser tomadas por los miembros del equipo. Establecemos un procesos de avance en columnas.
    https://trello.com/b/Vj8ybG92/kanban-template
- [ ] Figma ---> Tenemos el maquetado de la app y su perfil estético.
    https://www.figma.com/file/1J1oyIBmnfcyyrSXy0qGw3/El-Campito-Refugio-Web?node-id=0%3A1git 
- [ ] Postman --->  Montamos las rutas del `back` para prueba y visualización.
    https://galactic-shadow-340263.postman.co/workspace/Team-Workspace~f4a73fa3-c45a-4be0-8a53-895b1b65676d/collection/20469022-c6d4459b-582c-4b0e-9744-9e1223d9ebfe?ctx=documentation
  
# Testing

- [ ] Al menos tener 5 componentes del frontend con sus tests respectivos
- [ ] Al menos tener 5 rutas del backend con sus tests respectivos
- [ ] Al menos tener 5 modelos de la base de datos con sus tests respectivos

# Equipo de Desarrollo: DINAMO

- Paula Speciale : paulaspeciale  paulaspeciale@gmail.com
- Enzo Calvi : e1eternauta  enzocalvi243@gmail.com
- Joseph Villalba Osorio : reuht  jhosephvillalba@gmail.com
- Matías Dentoni: SoyDento  matiasdentoni@gmail.com
- Ariel Cazzulino Hartvig : arielcazzulino   arielcazzulino@gmail.com
- Jorge Chacin : Jorge12chacin  jorge12chacin@gmail.com
- Tomas Wolfmann: tomiwolf  tomiwolfman@gmail.com
- Nicolas Oviedo: Nicovied0   briannoviedo@gmail.com 
