#!/bin/sh

# Usamos envsubst para reemplazar variables en la plantilla y generar el archivo de configuración
envsubst '$DOMAIN_NAME' < /etc/nginx/templates/nginx.conf > /etc/nginx/conf.d/default.conf

# Verifica si el archivo de configuración se generó correctamente
if [ ! -f /etc/nginx/conf.d/default.conf ]; then
  echo "Error: El archivo de configuración de Nginx no se generó correctamente."
  exit 1
fi

# Iniciamos Nginx
nginx -g 'daemon off;'
