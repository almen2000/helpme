FROM node:18.15.0-alpine3.17

# RUN addgroup app && adduser -S -G app app
# USER app

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000
EXPOSE 5432

CMD [ "yarn", "dev" ]