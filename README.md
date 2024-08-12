# 📚 Online Bookstore System

Welcome to the Online Bookstore System! This project is designed to make buying and selling books online easy and efficient. Below, you'll find everything you need to get started.

## ✨ Features

- *🔐 User Authentication*: login and sign-up.
- *📚 Book Catalog*: Browse, filter, and sort through a wide range of books.
- *🛒 Shopping Cart*: Add, remove, and manage books in your cart.

## 🛠️ Tech Stack

- *Frontend*: React.js + Tailwind CSS
- *Backend*: C# .NET Core
- *Database*: SQL

## 🚀 Getting Started

### Prerequisites

Before you start, make sure you have:

- [Node.js](https://nodejs.org/) (for frontend)
- [.NET Core SDK](https://dotnet.microsoft.com/download) (for backend)
- SQL Server (or your preferred SQL database)

### Installation

1. *Clone the repository*:
    bash
    git clone https://github.com/Hxnsaja/E-BookStore.git
    cd online-bookstore
    

2. *Set up the Frontend*:
    bash
    cd client
    npm install
    npm start
    
    This installs dependencies and starts the React development server.

3. *Set up the Backend*:
    bash
    cd server
    dotnet restore
    dotnet run
    
    This restores .NET packages and starts the backend server.

4. *Set up the Database*:
   - Make sure your SQL Server is running.
   - Update the connection string in appsettings.json (located in the server folder).
   - Run the database migrations:
     bash
     dotnet ef database update
