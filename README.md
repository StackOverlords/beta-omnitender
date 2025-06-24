# 📱 Proyecto React Native

Este es un nuevo proyecto de [**React Native**](https://reactnative.dev), creado usando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## 📋 Prerequisitos

Necesitas tener instalado el CLI de React Native:

```bash
npm install -g @react-native-community/cli
```

## 🚀 Comenzando

### Instalar dependencias

```bash
npm install
```

### ⚙️ Configuración del entorno

#### 1. Configurar variables de entorno

Copia el template del environment y agrega tu client ID:

```bash
cp .env.template .env
```

> **Nota:** Solicita el valor de `ID_CLIENT_WEB` de forma privada

#### 2. Generar claves del keystore

Genera las claves SHA-1 y SHA-256 (reemplaza `filename` y `aliasname` con tus nombres preferidos):

```bash
keytool -genkey -v -keystore filename.keystore -alias aliasname -keyalg RSA -keysize 2048 -validity 10000
```

> **Importante:** Guarda las claves generadas en un lugar seguro para uso posterior

#### 3. Configurar entorno Android

Copia y completa el template del entorno Android:

```bash
cp ./android/env.template.gradle ./android/env.gradle
```

Actualiza el archivo con la información de tu keystore:

```gradle
MYAPP_UPLOAD_STORE_FILE = './android/app/filename.keystore'
MYAPP_UPLOAD_KEY_ALIAS = 'alias'
MYAPP_UPLOAD_STORE_PASSWORD = 'storePassword'
MYAPP_UPLOAD_KEY_PASSWORD = 'keyPassword'
```

> **Recomendación:** Usa la misma contraseña para store y key

#### 4. Extraer fingerprints del keystore

Obtén tus claves SHA-1 y SHA-256:

```bash
keytool -list -v -keystore ./android/app/filename.keystore -alias alias -storepass storePassword -keypass keyPassword
```

> **Acción requerida:** Envía estas claves de forma privada para la configuración de Firebase

#### 5. Configuración de Google Services  

> **Acción requerida:** Solicita el archivo `google-services.json` de forma privada y colócalo en `./android/app/`

## ▶️ Ejecutar el proyecto

### Desarrollo Android

Inicia Metro Bundler en una terminal:

```bash
npx react-native start
```

Compila y ejecuta en Android en otra terminal:

```bash
npm run android
```

## 📝 Notas importantes

- La configuración de iOS se agregará cuando sea necesaria
- Para cualquier configuración a nivel Android (`./android/*`), notifica para revisión
- La configuración del entorno puede variar según tu setup de desarrollo

## 💬 ¿Necesitas ayuda?

Si encuentras algún problema con la configuración o necesitas asistencia con configuraciones de plugins, no dudes en contactar.