# Portfolio

Este repositorio contiene el código para el portfolio personal de Esteban Kroh, construido con SvelteKit y desplegado usando Docker. Lo pueden encontrar online en [www.estebankroh.com](https://estebankroh.com)

## Deploy

Para correr el contenedor en desarrollo ejecutar los siguientes comandos:

```bash
cp .env.example .env
docker compose build
docker compose up dev
```

Para correr el contenedor en producción ejecutar los siguientes comandos:

```bash
cp .env.example .env
docker compose build
docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d $DOMAIN_NAME
docker compose up -d prod certbot nginx
```

## Comandos útiles

Revisar las versiones de las dependencias del package.json:

```bash
docker compose run --rm cli ncu
```

Revisar las versiones de las dependencias globales:

```bash
docker compose run --rm cli ncu -g
```

Actualizar todas las dependencias del package.json:

```bash
docker compose run --rm cli ncu -u
```

Revisa los errores ortográficos (check spelling)

```bash
docker compose run --rm cli cspell "./"
```

## Ayuda memoria sobre la configuración

A continuación, se detalla cómo está configurado el entorno de desarrollo y producción, así como los aspectos relacionados con el manejo de SSL con Certbot y Nginx a modo de recordatorio para un futuro.

#### Dockerfile
El Dockerfile define las siguientes etapas de construcción:

1. Etapa de Construcción (builder):

- Usa node:20-alpine para construir la aplicación.
- Instala dependencias y construye el proyecto.

2. Etapa de Desarrollo (dev):

- Basado en la etapa de construcción.
- Configura el entorno para desarrollo y expone el puerto 5173.

3. Etapa de Producción (prod):

- Basado en la etapa de construcción.
- Prepara el entorno de producción y expone el puerto 3000.

4. Servidor Nginx (nginx):

- Usa la imagen base de nginx:alpine.
- Copia el archivo de configuración y el script de inicio.
- Utiliza envsubst en el script de inicio para reemplazar variables de entorno en la configuración de Nginx.

#### Docker Compose
El archivo compose.yaml define los siguientes servicios:

1. cli:

- Utiliza la etapa builder para ejecutar comandos en el contenedor.
- Configurado para montar el código y las dependencias del proyecto.

2. dev:

- Utiliza la etapa dev para desarrollo.
- Expone el puerto 5173 para la aplicación en desarrollo.

3. prod:

- Utiliza la etapa prod para producción.
- Expone el puerto 3000 para la aplicación en producción.

4. nginx:

- Utiliza la etapa nginx del Dockerfile para configurar Nginx.
- Monta volúmenes para la configuración de Nginx, los certificados SSL y el directorio de Certbot.
- Expone los puertos 80 y 443 para HTTP y HTTPS.
- Depende del servicio prod y certbot para asegurarse de que la aplicación esté lista antes de iniciar Nginx.

5. certbot:

- Usa la imagen oficial de certbot/certbot.
- Monta volúmenes para los certificados y el directorio web.
- Ejecuta un comando para renovar automáticamente los certificados SSL.

#### Archivos Clave

1. nginx/nginx.conf:

- Configura Nginx para manejar las solicitudes HTTP y HTTPS.
- Usa variables de entorno para configurar el nombre de dominio y los certificados SSL.

2. nginx/start.sh:

- Reemplaza las variables de entorno en la plantilla de configuración de Nginx.
- Inicia Nginx en primer plano.

3. .cspell.json:

- Configuración básica de cspell check para que detecte errores en español.
- Wild list de palabras utilizadas en el proyecto.