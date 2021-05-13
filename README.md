<!--
Author: Fahid Nasir [FN] (fahid@aiondigital.com)
Change History
[FN:2020-04-19] Initial Commit with all the libraries and folder structure.
-->


# mw.fs.j1.wrapper

J2 Middleware API project to call the J1's Onboarding APIs

## Packages

---

Following tools and libraries are included with basic configuration:

| Node JS | Yarn   |
| ------- | ------ |
| v12.16  | latest |

> `Production Dependecies`
>
> 1. parsers
> 2. dotenv
> 3. express
> 4. Winston (Logger)

> `Development Dependencies`:
>
> 1. Typescript 3.8
> 2. Jest + supertest
> 3. Nodemon
> 4. Prettier
> 5. ESLint + Plugins (prettier, ts)
> 6. cross-env
> 7. rimraf
> 8. typings (@types/\*)
> 9. ts-jest, ts-node

## Available NPM Scripts

---

- `build` - Remove dist folder and Transpile Typescript to CommonJS
- `build:docker` - Same as above except ignore delete dist folder.
- `start` - Run the transpiled file `dist/server.js`
- `dev` - Directly run the application from TS files (using ts-node)
- `test` - Run unit tests with normal settings
- `test:watch` - Run unit tests in `Watch` mode
- `test:coverage` - Run unit tests and generate coverage report.
- `audit` - Wrapper of NPM audit scipt.
- `audit:fix` - Same as above + it fix all the fixable issues.

## Building the project and run it

---

### Building and run project

- Run `npm run build` to transpile the Typescript files and generate a `dist` folder.
- Run `npm start` to run the application on default port (3000)

### Run project from source directly

- Run `npm run dev` to run the application directly from Typescript files.

## API Routes

The route prefix is `/api` by default but it can be configured through .env file or environment variable.

| Route | Description            |
| ----- | ---------------------- |
| /api  | Main prefix of the API |

## Project Structure

| Name                              | Description                                                                 |
| --------------------------------- | --------------------------------------------------------------------------- |
| **.vscode/**                      | VSCode tasks, launch configuration and some other settings                  |
| **dist/**                         | Compiled source files will be placed here                                   |
| **src/**                          | Source files                                                                |
| **src/api/controllers/**          | REST API Controllers                                                        |
| **src/api/controllers/requests**  | Request classes with validation rules if the body is not equal with a model |
| **src/api/controllers/responses** | Response classes or interfaces to type json response bodies                 |
| **src/api/errors/**               | Custom HttpErrors like 404 NotFound                                         |
| **src/api/interceptors/**         | Interceptors are used to change or replace the data returned to the client. |
| **src/api/models/**               | TypeORM Models                                                              |
| **src/api/repositories/**         | Repository / DB layer                                                       |
| **src/api/services/**             | Service layer                                                               |
| **src/api/validators/**           | Custom validators, which can be used in the request classes                 |
| **src/auth/**                     | Authentication checkers and services                                        |
| **src/config/middlewares/**       | Express Middlewares like helmet security features                           |
| **src/util/**                     | The core features like logger and env variables                             |
| **src/db/factories**              | Factory the generate fake entities                                          |
| **src/db/migrations**             | Database migration scripts                                                  |
| **src/db/seeds**                  | Seeds to create some data in the database                                   |
| **src/typings/** \*.d.ts          | Custom type definitions and files that aren't on DefinitelyTyped            |
| **\_\_tests\_\_**                 | Tests                                                                       |
| .env.example                      | Environment configurations                                                  |
| .env.test                         | Test environment configurations                                             |

## Packaging a Product Build

### Local

- Run `npm run build` command. This will generate a dist folder with all the transpiled files.

### Docker

- Run `docker-compose build` command. This will generate a docker image for the current source code.

## Features

---

- [x] Coding Style setup
- [x] Linters
- [x] Unit Tests
- [x] Unit Tests Coverage with URL to access in browser.
- [ ] Environment variables setup without .env file
- [ ] Move all the directories inside src folder to create 1 folder dist when doing production build.
- [ ] DB folders [factories, migrations, seeds].
- [ ] NPM scripts with nps package
- [ ] API prefix `/api` configurable through environment variable.
- [ ] Controller Requests, Responses in separate files.
