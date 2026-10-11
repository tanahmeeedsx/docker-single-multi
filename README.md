# Docker Build Demo: Single-Stage vs Multi-Stage

A small React/Vite app for teaching Docker single-stage and multi-stage builds.

## What this demo teaches

- Dockerfile → Docker Image → Running Container
- Single-stage build: build and run in the same Node.js image
- Multi-stage build: build with Node.js, serve final files with NGINX
- Why multi-stage images are usually cleaner and smaller for production

## Project files

```text
docker-build-demo/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── Dockerfile.single
├── Dockerfile.multi
├── nginx.conf
├── package.json
└── index.html
```

## Local build: single-stage

```bash
docker build -f Dockerfile.single -t react-single:v1 .
docker run -d --name react-single -p 3001:4173 react-single:v1
```

Open:

```text
http://localhost:3001
```

## Local build: multi-stage

```bash
docker build -f Dockerfile.multi -t react-multi:v1 .
docker run -d --name react-multi -p 3002:80 react-multi:v1
```

Open:

```text
http://localhost:3002
```

## Compare image sizes

```bash
docker images | grep react
```

## Go inside containers

Single-stage:

```bash
docker exec -it react-single sh
node -v
npm -v
ls
ls dist
exit
```

Multi-stage:

```bash
docker exec -it react-multi sh
nginx -v
node -v
npm -v
ls /usr/share/nginx/html
exit
```

In the multi-stage container, `node -v` and `npm -v` should fail because the final image is NGINX only.
