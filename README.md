# nestjs-template-ts

A modern NestJS 11 + TypeScript template with Objection.js, Knex (PostgreSQL), Jest, dotenv, Swagger, and Docker support.

## Features

- NestJS 11 (latest)
- TypeScript
- Objection.js + Knex (PostgreSQL)
- Jest for unit testing
- dotenv for environment variables
- Swagger for API documentation
- Docker support (single container)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy and configure your environment variables:
   ```bash
   cp config/.env-local-template config/.env
   # Edit config/.env as needed
   ```
3. Run database migrations:
   ```bash
   npm run db:latest
   ```
4. Start the application:
   ```bash
   npm run start:dev
   ```

## Docker

Build and run the app in Docker:

```bash
docker build -t nestjs-template-ts .
docker run --env-file=config/.env -p 4000:4000 nestjs-template-ts
```

## Swagger

Visit http://localhost:4000/api for Swagger UI after app starts.

## Testing

```bash
npm run test
```
