ARG NODE_VERSION
FROM node:${NODE_VERSION}-alpine
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app
USER node

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
CMD [ "node", "hecho.js" ]
