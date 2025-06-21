This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Deben tener instalado el cli de react native

* @react-native-community/cli


## Step 1: Instalar dependencias

### 1) Primero instalar dependencias:

```sh
# Using npm
npm install
 
```

## Step 2: Preparar el entorno

### 1) Copiar el archivo .env.template y colocar la key en el parametro ID_CLIENT_WEB

- Me piden ese value por privado.

```sh
# Command
cp .env.emplate .env
 
```


### 2) Generar las key sha-1 y sha-256: 
- Cambiar 'filename' y 'aliasname' con los nombres que van a usar. Guardenselos en algun lugar para usarlos luego.
- Seguir los pasos rellenando los datos cuando se ejecute el comando, les pedirá que rellenen un formulario.

```sh
# Command
keytool -genkey -v -keystore filename.keystore -alias aliasname -keyalg RSA -keysize 2048 -validity 10000
 
```


### 3) Copiar el archivo /android/env.template.gradle y rellenar los datos que pusieron en el formulario.

```sh
# Command
cp ./android/env.template.gradle ./android/env.gradle 
 
```
- Debería quedar algo asi: Les recomiendo usar la misma password en store y key.

```gradle
# File
    MYAPP_UPLOAD_STORE_FILE = './android/app/filename.keystore'
    MYAPP_UPLOAD_KEY_ALIAS = 'alias'
    MYAPP_UPLOAD_STORE_PASSWORD = 'storePassword'
    MYAPP_UPLOAD_KEY_PASSWORD = 'keyPassword'
```


### 4) Una vez configurado eso copiar las key sha-1 y sha-256 y pasarmelas por privado.

```sh
# Command
keytool -list -v -keystore ./android/app/filename.keystore -alias alias -storepass storePassword -keypass keyPassword
```
- Este comando va a mostrarles las key para que copien.


### 5) Una vez hecho eso me piden por privado el archivo google-services.json

- Este deberán prosicionarlo dentro de ./android/app/ por ahora, cuando trabajemos con dispositivos "ios" agregamos las demas configuraciones.


## Step 3: Iniciar el proyecto

### Android
- Ejecuten npx en una terminal
```sh
# Usen npx en una terminal para levantar el Metro Bundler
npx react-native start
```
- Ejecuten npm en otra terminal
```sh
# Usen npm en otra terminal para compilar y instalar el app en su emulador/dispositivo Android que van a usar.
npm run android
```
- Depende de como esté su entorno configurado: Yo uso esto para levantar mis proyectos a lo mejor su entorno solo pida usar :> npm run android


# Si van a hacer alguna configuración de plugins o que tenga que ver con el nivel de ./android/* me avisan para revisar.