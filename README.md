# Crypto Currency Exchange Rates App

This is Crypto Currency Exchange Rates web application powered by React with TypeScript in the frontend and Spring with Java in the backend. One could see the latest exchange rates for available crypto currencies via the web interface.

## Tech Stack

This app uses a number of third party open-source tools:

### Frontend
- [Vite](https://vitejs.dev/) for building the [React](https://reactjs.org/) frontend.
- [Antd](https://ant.design/) for the UI components.

### Backend
- [Spring](https://spring.io/) as web framework.
- [Gradle](https://spring.io/) for building the backend.

## Getting started

### Requirements
You must install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) to run the application.

### Up and Running
Run following commands from root directory of the project to run the overall application.
```shell
docker-compose build
docker-compose up -d
```

It will build and start the docker image written for the app (which can be seen in [Dockerfile](https://github.com/SRatna/bike-sharing-app/blob/main/Dockerfile)). We have implemented multi-stage builds in the Dockerfile to automate the process of building frontend and backend.

- The web app can be loaded by visiting [http://localhost:8080/](http://localhost:8080/).

### Clean up
Run following command to clean all containers, images, volumes, networks, and undefined containers created with docker-compose.
```shell
docker-compose down --rmi all -v --remove-orphans
```
