# E-BookStore
# Online Bookstore System

This project is an Online Bookstore System designed to facilitate the purchase and sale of books online. The system is built with a React frontend using Tailwind CSS for styling, a C# .NET backend for business logic, and an SQL database for data management.

## Features


- **Book Catalog**: Display of books with filtering and sorting options.
- **Shopping Cart**: Add, remove, and update items in the cart.

## Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: C# .NET Core
- **Database**: SQL

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (for frontend)
- [.NET Core SDK](https://dotnet.microsoft.com/download) (for backend)
- SQL Server (or any preferred SQL-based database)

 ### Steps

1. **Clone the repository**:
    ```bash

2. **Frontend Setup**:
    ```bash
    cd client
    npm install
    npm start
    ```
    This will install the necessary dependencies and start the React development server.
3. **Backend Setup**:
    ```bash
    cd server
    dotnet restore
    dotnet run
    ```
    This will restore the .NET packages and start the backend server.

4. **Database Setup**:
   - Ensure your SQL Server is running.
   - Update the connection string in the `appsettings.json` file located in the `server` directory.
   - Run the database migrations:
     ```bash
     dotnet ef database update
     ```
