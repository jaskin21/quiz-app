# Trivia Application<!-- omit in toc -->

- [Requirements](#requirements)
- [Installation](#installation)
  - [Client](#client)
  - [Server](#server)
- [Run Project](#run-project)
  - [Client](#client-1)
  - [Server](#server-1)
- [Environment](#environment)
  - [Server](#server-2)
  - [Client](#client-2)
- [Linter](#linter)

---

# Requirements

- [Node JS](https://nodejs.dev)
- [npm](https://www.npmjs.com/)
- [Mongo DB](https://www.mongodb.com)

---

# Installation

### Client

For Client (or Frontend), just run

```sh
npm install --dir client
```

### Server

For Server (or Backend), just run

```sh
npm install --dir server
```

---

# Run Project

Once the dependencies are installed:

### Client

For Frontend, just run:

```sh
npm run --dir client start
```

### Server

For Backend, just run:

```sh
npm run --dir server dev
```

---

# Environment

Each Project (Client & Server) has their own specific environment variables, just go to their specific directory and add `.env` (dot env) file or copy the `.env.example` file and edit their values.

### Server

For the Backend:

| ENV VARIABLE    | DESCRIPTION                     | TYPE     | REQUIRED | DEFAULT VALUE               |
| :-------------- | :------------------------------ | :------- | :------- | :-------------------------- |
| `DB_CONNECTION` | For Mongo DB, usually the host  | `string` | NO       | `mongodb://localhost:27017` |
| `DB_NAME`       | For Mongo DB, the database name | `string` | YES      |                             |
| `PORT`          | The Port of the Server          | `number` | NO       | `5000`                      |

### Client

For the Frontend:

| ENV VARIABLE    | DESCRIPTION     | TYPE     | REQUIRED | DEFAULT VALUE           |
| :-------------- | :-------------- | :------- | -------- | ----------------------- |
| `QUESTION_LIST` | The Backend URL | `string` | NO       | `http://localhost:5000` |

# Linter

This is make your code consistent by using [ESLint](https://eslint.org).

Before you commit your changes, just make sure to run the linter first

Just run run:

```sh
npm run --dir (client|server) lint
```

If you wanted to fix automatically, just run:

```sh
npm run --dir (client|server) lint:fix
```

Make sure to change the value of `--dir` flag

⚠️ However, **NOT** all codes are fixable, but the linter will give you hint to fix it

---

###### Created by Renz Jaskin Agmata <!-- omit in toc -->
