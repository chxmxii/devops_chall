FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:20-alpine AS production
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /usr/src/app/build /app/build
EXPOSE 8081
CMD ["serve", "-s", "build", "-l", "8081"]