# API Users Project

## Overview
This project is a RESTful API built with **Node.js**, using **Express** as the web framework, **MongoDB** as the database, and **Prisma** as the ORM. Authentication is handled with **JWT**, and passwords are securely hashed using **Bcrypt**.

## Technologies Used
- **JavaScript**: Programming language for building the API.
- **Node.js**: Runtime environment for executing JavaScript server-side.
- **Express**: Web framework for handling routes and middleware.
- **Prisma**: ORM for database interaction.
- **JWT (JSON Web Token)**: Authentication mechanism for secure API access.
- **Bcrypt**: Library for password hashing.
- **MongoDB**: NoSQL database for storing user and application data.

## Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file and add the following:
   ```env
   DATABASE_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
   JWT_SECRET=<your_secret_key>
   ```

## Main Commands
| Command | Purpose |
|---------|---------|
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the server in development mode using Nodemon |
| `npm start` | Starts the server in production mode |
| `npx prisma generate` | Generates Prisma client based on schema |
| `npx prisma migrate dev --name init` | Runs database migrations |
| `npx prisma studio` | Opens Prisma Studio to manage the database |

## API Endpoints

### Authentication
- **POST /auth/register**: Register a new user (hashes password with Bcrypt)
- **POST /auth/login**: Authenticates a user and returns a JWT token

### Protected Routes (Requires JWT)
- **GET /users**: Fetches all users (protected route)

## Running the Project
1. Start the database (if running locally):
   ```sh
   mongod
   ```
2. Run the application:
   ```sh
   npm run dev
   ```

## Security Best Practices
- Store secrets in a `.env` file and never commit it.
- Use **HTTPS** in production.
- Implement proper validation and error handling.

## License
This project is licensed under the MIT License.

