# Etapa de construcción
FROM node:alpine AS builder
RUN yarn add sharp --ignore-engines \
    && yarn global add npm-check-updates \
    && yarn global add cspell @cspell/dict-es-es
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# Etapa de desarrollo
FROM builder AS dev
WORKDIR /app
COPY --from=builder /app/ /app/
ENV NODE_ENV=development
CMD ["yarn", "run", "dev"]
EXPOSE 5173

# Etapa de producción
FROM builder AS prod
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json
ENV NODE_ENV=production
RUN yarn install --production
CMD ["node", "build"]
EXPOSE 3000

# Servidor nginx
FROM nginx:alpine AS nginx
COPY /nginx/nginx.conf /etc/nginx/templates/nginx.conf
COPY /nginx/start.sh /start.sh
RUN chmod +x /start.sh
ENTRYPOINT ["/start.sh"]