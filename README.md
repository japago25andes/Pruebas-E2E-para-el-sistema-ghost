# Video Explicativo

* Semana 5

https://youtu.be/btCVVB7vZSE

* Semana 6

Kraken: assadas

Cypress: sdasdasda

# Para esta semana se hostean las dos versiones de ABP

* Version 5.72.1:  
http://137.184.28.168/ghost/#/signin

* Version 4.3
http://68.183.128.146:3001/ghost

# Configuraciones necesarias para KRAKEN

### 1. Usar la versión 16.14.2 de Node.Js
### 2. Tener instalado Android Studio
### 3. En las propiedades de Android Studio tener instalado:

* a. Android SDK Platform-Tools
* b. Android SDK Build-Tools
* c. Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

### 4. Configurar las siguientes rutas en PATH:

* a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
* b. C:\Users\***\AppData\Local\Android\Sdk\tools
* c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
* d. C:\Users\***\AppData\Local\Android\Sdk

### 5. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

## Instalación y set-up de Kraken: 

* 1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
* 2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g
* 3. Inicializar Kraken: kraken-node gen
* 4. Instalar Kraken en local: npm install kraken-node
* 5. Instalar Appium en global: npm install -g appium
* 6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

# Si aparece el error:
 
![image](https://github.com/japago25andes/Pruebas-E2E-para-el-sistema-ghost/assets/142058726/6243be56-8a03-4091-946a-a1e7ee29bf15)

### Paso 1: Descargar Android SDK Platform-Tools

1.	En el contenido de este repositorio exite una carpeta llamada "platform-tools_r34.0.5-windows.zip"
2.	El archivo descargado será un archivo .zip.
   
### Paso 2: Extraer el Archivo Descargado

1.	Ve a la carpeta donde descargaste el archivo .zip.
2.	Haz clic derecho sobre el archivo y selecciona "Extraer todo..." o utiliza tu gestor de archivos preferido para extraer el contenido del archivo.
3.	Elige una ubicación para extraer los archivos que puedas recordar fácilmente, como C:\Android\platform-tools.
   
### Paso 3: Agregar la Ruta a las Variables de Entorno

1.	Una vez extraído, necesitas agregar la ruta de la carpeta platform-tools a la variable de entorno PATH. Esto permitirá ejecutar adb desde la línea de comandos sin tener que estar en el directorio de platform-tools.
2.	Copia la ruta de la carpeta donde extrajiste las herramientas de plataforma.

# Configuraciones necesarias para CYPRESS

### 1. Usar la versión 16.14.2 de Node.Js

### 2. Ejecute el comando npm install -g cypress

### 3. Crear una carpera o ubicarse en la carpeta que se va a utilizar para realizar las pruebas

### 4. Ejecutar el comando cypress open
