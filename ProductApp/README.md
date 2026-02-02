# Product Inventory Management System

A robust and scalable backend for an Inventory Management System, designed with strict adherence to Object-Oriented Programming (OOP) principles and a layered architecture (Controller-Service-Repository). This project demonstrates a production-ready approach to building Node.js applications with TypeScript.

## Project Overview

This application serves as a comprehensive backend solution for managing product inventories. It goes beyond basic CRUD operations by implementing advanced features such as dynamic searching, filtering, sorting, and pagination. Additionally, it includes a complete authentication system using JWT (JSON Web Tokens).

### Key Features

*   **Layered Architecture:** Follows the Controller-Service-Repository pattern to ensure separation of concerns, maintainability, and testability.
*   **Object-Oriented Design:** Utilizes TypeScript classes and interfaces to enforce type safety and encapsulation.
*   **Authentication:** Secure user signup and login functionality using Bcrypt for password hashing and JWT for session management.
*   **Advanced Search:** Full-text search capabilities allowing users to query products by name, description, or SKU.
*   **Rich Filtering:** Filter products by specific categories and price ranges (minimum and maximum).
*   **Dynamic Sorting:** sort results by any field in either ascending or descending order.
*   **Pagination:** Efficient data retrieval with customizable page sizes and improved performance.
*   **Validation & Error Handling:** Robust input validation using Mongoose schemas and a centralized global error handling middleware for consistent API responses.

## Technical Stack

*   **Runtime Environment:** Node.js
*   **Web Framework:** Express.js
*   **Language:** TypeScript (Strict Mode)
*   **Database:** MongoDB
*   **ODM:** Mongoose
*   **Authentication:** JSON Web Tokens (JWT) & Bcrypt
*   **Logging:** Morgan

## Architecture Design

The project is structured into distinct layers to promote clean code and scalability:

1.  **Routes Layer (`src/routes`)**: Defines the API endpoints and maps them to the appropriate controllers.
2.  **Controller Layer (`src/controllers`)**: Handles incoming HTTP requests, validates input, and sends HTTP responses. It acts as an interface between the client and the service layer.
3.  **Service Layer (`src/services`)**: Contains the core business logic. It processes data, applies business rules (e.g., calculations, complex validations), and communicates with the repository layer.
4.  **Repository Layer (`src/repositories`)**: Manages direct data access. It performs database operations (CRUD) using Mongoose models, abstracting the database logic from the service layer.
5.  **Model Layer (`src/models`)**: Defines the data structure and schema using Mongoose.

## Installation and Setup

Follow these steps to set up the project locally:

1.  **Prerequisites:** Ensure you have Node.js and MongoDB installed on your system.

2.  **Clone the Repository:**
    Navigate to the project directory.

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Configuration:**
    The application connects to a local MongoDB instance by default. You can configure the database connection string in `src/utils/database.ts` or use environment variables.

5.  **Run Development Server:**
    Start the server in development mode with hot-reloading.
    ```bash
    npm run dev
    ```
    The server will start at `http://localhost:3000`.

6.  **Build for Production:**
    Compile the TypeScript code to JavaScript.
    ```bash
    npm run build
    npm start
    ```

## API Documentation

### Authentication

*   **POST /signup**
    Register a new user.
    *   **Body:**
        ```json
        {
          "name": "John Doe",
          "email": "john@example.com",
          "password": "securepassword"
        }
        ```

*   **POST /login**
    Authenticate a user and receive a JWT token.
    *   **Body:**
        ```json
        {
            "email": "john@example.com",
            "password": "securepassword"
        }
        ```

### Products

*   **POST /products**
    Create a new product.
    *   **Body:**
        ```json
        {
            "name": "Wireless Mouse",
            "description": "Ergonomic wireless mouse",
            "price": 25.99,
            "category": "Electronics",
            "stock": 100,
            "sku": "MS-WL-01"
        }
        ```

*   **GET /products**
    Retrieve a list of products with optional query parameters for search, filter, sort, and pagination.
    *   **Query Parameters:**
        *   `page`: Page number (default: 1)
        *   `limit`: Items per page (default: 10)
        *   `search`: Search term (matches name, description, SKU)
        *   `category`: Filter by category name
        *   `minPrice`: Filter by minimum price
        *   `maxPrice`: Filter by maximum price
        *   `sortBy`: Sort field and order (e.g., `price:asc`, `createdAt:desc`)
    *   **Example URL:**
        `http://localhost:3000/products?page=1&limit=5&category=Electronics&minPrice=10&sortBy=price:asc`

*   **GET /products/:id**
    Retrieve details of a single product by its ID.

*   **PUT /products/:id**
    Update an existing product. Accepts partial updates.

*   **DELETE /products/:id**
    Remove a product from the inventory.

## Folder Structure

```
src/
├── controllers/      # Handles HTTP headers, status codes, and request parsing
├── services/         # Implements business logic and validations
├── repositories/     # Encapsulates database access queries
├── models/           # Defines Mongoose schemas for User and Product
├── routes/           # Maps URL paths to Controller methods
├── interfaces/       # TypeScript interfaces for strict type checking
├── middlewares/      # Global middleware (e.g., Error Handling)
├── utils/            # Utility classes (Database connection, Custom Exceptions)
├── app.ts            # Application setup and configuration
└── server.ts         # Application entry point
```

## Author

Mohit Kourav
