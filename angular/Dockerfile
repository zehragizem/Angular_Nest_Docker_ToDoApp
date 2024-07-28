#stage 1 build
FROM node:18 AS development

WORKDIR /gizem/angular/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@

COPY . .


RUN npm run build

# Expose port
EXPOSE 4200