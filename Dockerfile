FROM node:12.14.0 as builder
COPY package.json package-lock.json ./
RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app
COPY . .
RUN $(npm bin)/ng build --prod --output-path=dist

FROM httpd:2.4-alpine
COPY --from=builder /ng-app/dist/ /usr/local/apache2/htdocs/
