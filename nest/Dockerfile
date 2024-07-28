#specify node version
#name image development
FROM node:18 AS development

#specify working directory
WORKDIR /gizem/src/app

#copy package-lock-json and package.json
COPY package*.json ./


RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

#####################

FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /gizem/src/app

COPY --from=development /gizem/src/app/ .

EXPOSE 3000

# run app
CMD [ "node", "dist/main"]