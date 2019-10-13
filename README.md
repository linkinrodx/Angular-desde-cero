# Angular-desde-cero

vamos a crear un crud en angular

## lo primero que vamos a hacer es:

- instalamos o actualizamos node.js (si es necesario volver a instalarlo)
- instalamos o actualizamos npm (npm install npm -g)
- instalamos o actualizamos angular de forma global (npm install -g @angular/cli@latest) mayor info en [angular](https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version)
- instalamos o actualizamos vscode
- instalar git
    
## vamos a trabajar en el siguiente repositorio https://github.com/linkinrodx/Angular-desde-cero y commiteamos

```
echo "# Angular-desde-cero" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/linkinrodx/Angular-desde-cero.git
git push -u origin master
```

luego de subir el readme, vamos a crear nuestra aplicacion en angular, nos ubicamos en la carpeta de nuestro repositorio, y lanzamos los comandos

```
ng new app
```

nos preguntaran acerca de ciertas opciones, aceptamos o denegamos dependiendo de la preferencia

luego de crear nuestro proyecto vamos a ejecutarlo

```
cd app
ng serve
```

en nuestro navegador ingresamos a la siguiente ruta http://localhost:4200/ y veremos nuestro proyecto


## Comenzamos a trabajar en nuestro proyecto, vamos a crear carpetas para organizar nuestro proyecto

- components
- directives
- guards
- interceptors (para agregar token)
- models (agents:  request, response, result)
- services (adapters)
- shared

comenzaremos creando un component home, nos ubicamos en la carpeta de componentes
ng generate component home

crearmos un nuevo servicio, nos ubicamos en la carpeta de servicios
```
ng generate service bertoni
```

en nuestro archivo de enviroment agregamos la ruta de nuestro servicio a agregar

- creamos el modelo de nuestro response
- creamos nuestro service que va a traer informacion de nuestro servicio
- en nuestro nuevo componente home agregamos la funcion que llama al nuevo servicio,

hacemos la prueba, y vemos que tenemos conexion a el servicio.