# Angular-desde-cero

vamos a crear un crud en angular

## lo primero que vamos a hacer es:

- instalamos o actualizamos node.js (si es necesario volver a instalarlo)
- instalamos o actualizamos npm (npm install npm -g)
- instalamos o actualizamos angular de forma global (npm install -g @angular/cli@latest) mayor info en [angular](https://stackoverflow.com/questions/43931986/how-to-upgrade-angular-cli-to-the-latest-version)
- instalamos o actualizamos vscode
- instalar git

configurar git si es necesario

```
git config --global user.name "Rodrigo Saraya"
git config --global user.email rodrigo.saraya@mail.com
```
    
## vamos a trabajar con este repositorio [Angular-desde-cero](https://github.com/linkinrodx/Angular-desde-cero)

Creamos una carpeta en nuestra compu y desde ahi lanzamos los siguientes comandos
```
echo "# Angular-desde-cero" >> README.md
git init
git add README.md
git commit -m "mi primer commit"
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


## Comenzamos a trabajar en nuestro proyecto

Nos ubicamos en la carpeta src/app, vamos a crear carpetas para organizar nuestro proyecto, 

- components
- directives
- guards
- interceptors (para agregar token)
- models (agents:  request, response, result)
- services (adapters)
- shared

comenzaremos creando un component home, nos ubicamos en la carpeta de componentes
```
ng generate component home
```

crearmos un nuevo servicio, nos ubicamos en la carpeta de servicios
```
ng generate service bertoni
```
el nuevo servicio lo referenciamos al app.module

en nuestro archivo de environment agregamos la ruta de nuestro servicio a agregar

- creamos el modelo de nuestro response
- creamos nuestro service que va a traer informacion de nuestro servicio
- en nuestro nuevo componente home agregamos la funcion que llama al nuevo servicio,

hacemos la prueba, y vemos que tenemos conexion a el servicio.

## Vamos a desplegar la aplicacion en un repositorio s3 de aws

Ingresamos al siguiente [link](https://console.aws.amazon.com/console/home), nos logueamos o creamos una cuenta de aws

una vez dentro, buscamos el recurso s3

dentro del recursp s3, creamos un nuevo repositorio para nuestro proyecto, le damos crear bucket

ingresamos el siguiente nombre angular-desde-cero-dev y le damos a crear

### ahora que ya creamos nuestro repositorio s3

subimos nuestros archivos de nuestra aplicacion, para esto necesitamos compilar nuestra aplicacion en modo de produccion

corremos el siguiente comando

```
ng build --prod
```

terminada la compilacion, copiamos los archivos generados dentro de la carpeta dist/app y los cargamos a nuestro repositorio s3

### ahota vamos hacer algunas configuraciones

ingresamos al repositorio, nos ubicamos en el panel de propiedades

seleccionamos la opcion de "Alojamiento de sitios web estáticos"

ahora configuramos para "usar este bucket para alojar un sitio web", colocamos como documento de indice el archivo "index.html"

podemos ver nuestro ["punto de enlace"](http://angular-desde-cero-dev.s3-website.us-east-2.amazonaws.com), ingresamo y parece que tenemos problemas, parece que falta realizar algunos pasos

#### Continuamos configurando los permisos

nos ubicamos en el panel de permisos

editamos la opcion de "bloquear todo acceso público", desactivamos la casilla y listo

seguimos en el panel de permisos, pero nos ubicamos en la pestaña de "politicas del bucket"

ahi ingresamos los siguientes permisos

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::angular-desde-cero-dev/*"
        }
    ]
}
```

con esto ya tendriamos todo listo, ingresamos a nuestro ["punto de enlace"](http://angular-desde-cero-dev.s3-website.us-east-2.amazonaws.com), y ya podriamos ver nuestra web