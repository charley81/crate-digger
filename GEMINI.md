# GEMINI.md

## Project Overview

This is a Next.js project called "crateDigger" for managing a record collection. It uses Prisma for database access, and Tailwind CSS for styling. The application allows users to create, read, update, and delete tracks in their collection.

The project is structured as follows:

-   `src/app`: Contains the main application pages, including the landing page and pages for listing, creating, editing, and viewing tracks.
-   `src/components`: Contains reusable UI components.
-   `src/features`: Contains the core application logic, including actions, components, queries, and types related to tracks.
-   `src/lib`: Contains utility functions and the Prisma client instance.
-   `prisma`: Contains the database schema and seed script.

## Building and Running

To build and run the project, use the following commands:

-   `npm install`: Install dependencies.
-   `npm run dev`: Start the development server.
-   `npm run build`: Build the project for production.
-   `npm run start`: Start the production server.
-   `npm run lint`: Lint the code.
-   `npm run lint-fix`: Lint and fix the code.
-   `npm run prisma-seed`: Seed the database.
-   `npm run type-check`: Run the TypeScript compiler to check for type errors.

## Development Conventions

-   **Styling**: The project uses Tailwind CSS for styling. Utility classes are used directly in the JSX.
-   **Data Fetching**: Data is fetched using server-side queries with Prisma.
-   **Mutations**: Server actions are used for creating, updating, and deleting data.
-   **Routing**: The `src/paths.ts` file defines the application's routes.
-   **Components**: The project uses a combination of reusable UI components and feature-specific components.
-   **Database**: The database schema is defined in `prisma/schema.prisma`.
