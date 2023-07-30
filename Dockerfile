# frontend build
FROM node:18-alpine AS frontendBuild

WORKDIR /app

COPY frontend/package.json ./
COPY frontend/package-lock.json ./

RUN npm install

COPY ./frontend ./

RUN npm run build

# backend build
FROM eclipse-temurin:17-jdk-alpine as backendBuild

WORKDIR /app

COPY ./backend ./
# copy all files from dist to static folder
COPY --from=frontendBuild /app/dist ./src/main/resources/static

RUN ./gradlew bootJar

# backend run
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY --from=backendBuild /app/build/libs/exchangerates-0.0.1-SNAPSHOT.jar exchangerates.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","exchangerates.jar"]