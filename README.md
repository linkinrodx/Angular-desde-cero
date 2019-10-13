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
