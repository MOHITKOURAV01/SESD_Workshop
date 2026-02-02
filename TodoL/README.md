# Todo List Application Backend

A clean, standardized backend for managing Todo tasks, engineered to demonstrate strict Object-Oriented Programming (OOP) principles and a layered architecture within a Node.js and TypeScript environment. This project mirrors the architectural standards set by the Product Inventory system but focuses on a simplified domain.

## Project Overview

This application provides a RESTful API for a Todo List, serving as a reference implementation for Refactoring and Clean Code practices. It transforms a basic implementation into a structured, scalable system using the Controller-Service-Repository pattern.

### Key Features

*   **Layered Architecture:** strict separation of concerns into Controller, Service, and Repository layers.
*   **Object-Oriented Design:** Usage of classes and interfaces to ensure modularity and type safety.
*   **Clean Code Practices:** Adheres to standard JavaScript/TypeScript coding conventions with a focus on readability and maintainability.
*   **CRUD Operations:** Complete functionality to Create, Read, Update, and Delete todo items.
*   **Type Safety:** Built entirely with TypeScript to prevent runtime type errors.

## Technical Stack

*   **Runtime Environment:** Node.js
*   **Web Framework:** Express.js
*   **Language:** TypeScript (Strict Mode)
*   **Database:** MongoDB
*   **ODM:** Mongoose

## Architecture Design

The project follows a strict flow to ensure code quality:

1.  **Routes Layer (`src/routes`)**: Defines API endpoints and routes requests to the specific controller.
2.  **Controller Layer (`src/controllers`)**: Handles HTTP requests and responses. It parses user input and delegates business logic to the service layer.
3.  **Service Layer (`src/services`)**: Encapsulates the business rules for handling todos, ensuring the controller remains lightweight.
4.  **Repository Layer (`src/repositories`)**: Manages all database interactions, abstracting the underlying data source from the rest of the application.
5.  **Model Layer (`src/models`)**: Defines the schema and data structure for Todo items.

## Installation and Setup

Follow these instructions to run the project locally:

1.  **Prerequisites:** Node.js and MongoDB must be installed.

2.  **Clone the Repository:**
    Navigate to the project directory.

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Configuration:**
    The application is configured to connect to a local MongoDB instance. Ensure your MongoDB service is running.

5.  **Run Development Server:**
    Start the server with hot-reload enabled.
    ```bash
    npm run dev
    ```
    The server will listen on port `4000`.

6.  **Build:**
    Compile the project for production.
    ```bash
    npm run build
    ```

## API Documentation

### Todos

*   **GET /**
    Retrieve a list of all todo items.

*   **GET /:id**
    Retrieve a specific todo item by its unique ID.

*   **POST /**
    Create a new todo item.
    *   **Body:**
        ```json
        {
            "title": "Complete Assignment",
            "isCompleted": false
        }
        ```

*   **PUT /:id**
    Update the status or title of an existing todo.
    *   **Body:**
        ```json
        {
            "isCompleted": true
        }
        ```

*   **DELETE /:id**
    Permanently remove a todo item from the database.

## Folder Structure

```
src/
├── controllers/      # Handles request/response lifecycle
├── services/         # Contains business logic
├── repositories/     # Manages direct database access
├── models/           # Defines Mongoose schemas
├── routes/           # Maps HTTP routes to controllers
├── interfaces/       # Type definitions
├── app.ts            # Application configuration
└── server.ts         # Server entry point
```

## Author

Mohit Kourav
