# Work-study live coding 2022-09

## Development environment

### Integrate with coding tools

Install dependencies on host system to get autocomplete and other IDE features:

```
cd back-end && npm i && cd ..
cd web-app && npm i && cd ..
```

### Run app

Docker and Docker Compose are required on host system.

Build and start in dev mode:

```
./build-start.dev.sh
```

#### Run tests

Back-end:

```
docker compose exec back-end npm run test
```

Web-app:

```
docker compose exec web-app npm run test
```
