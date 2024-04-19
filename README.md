# Job API

This is a simple RESTful API built with Express.js and Prisma to manage job data.

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or later)
- npm (comes with Node.js)
- Postrgresql
- Prisma

## Installation

1. Clone the repository: https://github.com/13XAVI/Prisma.git

2. Install dependencies:

- npm i typescript ts-node @types/node -D
- @types/express
- @types/cors

3. Set up your database connection in the `.env` file. Make sure you added username and password for your connection string from postgres
4. Run database migrations to create tables:

- npx prisma init --datasource-provider postgresql
- npx prisma migrate dev --name init
  The server will start listening on http://localhost:5000 by default.

## Routes

### GET /jobs

Fetches all jobs from the database.

### GET /jobs/:id

Fetches a single job by its ID.
