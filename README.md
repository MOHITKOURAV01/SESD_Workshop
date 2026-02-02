# SESD Workshop - Backend Development Projects

This repository contains two comprehensive backend applications demonstrating Object-Oriented Programming principles and clean architecture patterns in Node.js with TypeScript.

## Projects Overview :-

### 1. ProductApp - Advanced Inventory Management System
A full-featured product inventory backend with authentication, search, filtering, sorting, and pagination capabilities.

**Key Features:**
- Complete CRUD operations for products
- User authentication with JWT and Bcrypt
- Advanced search with text indexing
- Multi-criteria filtering (category, price range)
- Dynamic sorting on any field
- Pagination support
- Global error handling middleware
- Clean OOP architecture (Controller → Service → Repository)

**Tech Stack:** Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, Bcrypt

[View ProductApp Documentation](./ProductApp/README.md)

### 2. TodoL - Clean Todo Application
A refactored todo list backend showcasing proper layered architecture and separation of concerns.

**Key Features:**
- Full CRUD operations for todos
- Clean OOP structure
- Repository pattern implementation
- Type-safe with TypeScript
- Mongoose schema validation

**Tech Stack:** Node.js, Express, TypeScript, MongoDB, Mongoose

[View TodoL Documentation](./TodoL/README.md)

## Architecture Pattern

Both projects follow a strict layered architecture:

```
Routes → Controllers → Services → Repositories → Models
```

**Routes:** Define API endpoints and map them to controllers  
**Controllers:** Handle HTTP requests and responses  
**Services:** Contain business logic and validation  
**Repositories:** Manage database operations  
**Models:** Define data schemas and structures

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MOHITKOURAV01/SESD_Workshop.git
cd SESD_Workshop
```

2. Install dependencies for ProductApp:
```bash
cd ProductApp
npm install
```

3. Install dependencies for TodoL:
```bash
cd ../TodoL
npm install
```

### Running the Applications

**ProductApp** (Port 3000):
```bash
cd ProductApp
npm run dev
```

**TodoL** (Port 4000):
```bash
cd TodoL
npm run dev
```

Both applications use an in-memory MongoDB instance for development, so no external database setup is required.

## Project Structure

```
SESD_Workshop/
├── ProductApp/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── interfaces/
│   │   └── utils/
│   ├── package.json
│   └── README.md
├── TodoL/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── models/
│   │   ├── routes/
│   │   └── interfaces/
│   ├── package.json
│   └── README.md
└── README.md
```

## Key Learning Outcomes

- Implementation of Object-Oriented Programming in Node.js
- Layered architecture and separation of concerns
- Repository pattern for data access abstraction
- TypeScript for type safety and better developer experience
- RESTful API design principles
- Authentication and authorization with JWT
- Advanced querying techniques (search, filter, sort, paginate)
- Error handling best practices
- Clean code principles

## API Endpoints

### ProductApp
- `POST /signup` - User registration
- `POST /login` - User authentication
- `GET /products` - List all products (with query params for search/filter/sort/pagination)
- `GET /products/:id` - Get single product
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### TodoL
- `GET /` - List all todos
- `GET /:id` - Get single todo
- `POST /` - Create new todo
- `PUT /:id` - Update todo
- `DELETE /:id` - Delete todo
