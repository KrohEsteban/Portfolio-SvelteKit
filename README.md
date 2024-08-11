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
cp .env.dist .env
docker compose build prod
docker compose run prod
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