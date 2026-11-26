# Salone Digital Solutions

A responsive, static marketing site for Salone Digital Solutions. The contact form validates project details and opens the visitor's email application with a prefilled message to `hello@salonedigital.com`.

## Run with Docker

```sh
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080). Stop the container with `Ctrl+C`, or run `docker compose down`.

The `Dockerfile` packages the site with Nginx, and `nginx.conf` configures static-file serving and response headers.
