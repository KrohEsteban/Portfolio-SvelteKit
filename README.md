## Profolio

Este es el Portfolio de Esteban Kroh.
Lo pueden encontra online en [www.estebankroh.com](https://estebankroh.com)

Para correr el contenedor en desarrollo ejecutar los siguientes comando:

```bash
cp .env.example .env
docker compose up dev
```

Para correr el contenedor en producción ejecutar los siguientes comando:

```bash
cp .env.example .env
docker compose build prod nginx certbot
docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d $DOMAIN_NAME
docker compose run prod nginx certbot
```

#### Comandos útiles

Revisar las versiones de las dependencias del package.json:

```bash
docker compose run --rm cli ncu
```

Actualizar todas las dependencias del package.json:

```bash
docker compose run --rm cli ncu -u
```