
Para poder abrir un repositorio de GitHub en Visual Studio Code debes seguir estos pasos:

1. Clonar el repositorio:
Abre Visual Studio Code.
Ve al menú View y selecciona Clone Git Repository...
Pega la URL del repositorio de GitHub y elige la ubicación local para clonarlo.
2. Abrir la carpeta del proyecto:
Una vez clonado, ve a File -> Open Folder.
Selecciona la carpeta del proyecto que acabas de clonar.
3. Instalar dependencias:
Abre la terminal integrada en Visual Studio Code (Terminal -> New Terminal).
Dentro de la terminal, navega hasta la carpeta raíz del proyecto (cd nombre_del_proyecto).
Ejecuta "npm install" para instalar las dependencias del proyecto.
4. Iniciar la aplicación:
Utiliza el comando npm start en la terminal para iniciar el servidor de desarrollo de React.
La aplicación debería abrirse en tu navegador predeterminado en la dirección localhost:3000.

La aplicacion cuenta con 3 sectores la cual la primera cuenta con una tabla con los productos seleccionados con su precio unitario y subtotal (precio unitario por la cantidad del producto)
dentro de la tabla en cantidad tenemos 2 botones uno para incrementar y otro para disminuir las cantidades del producto. y el boton "eliminar" del final saca ese producto de la tabla.
los otros 2 sectores son 2 tablas uno que muestra los productos a seleccionar para meterlos a la tabla principal con sus respectivos precios  y la  restante es la que muestra la cantidad de productos que se seleccionaron mas la suma de los subtotales.
