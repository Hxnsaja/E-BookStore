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

### Steps

1. *Clone the repository*:
    bash
    git clone https://github.com/Hxnsaja/E-BookStore.git    cd online-bookstore
    

2. *Frontend Setup*:
    bash
    cd client
    npm install
    npm start
    
    This will install the necessary dependencies and start the React development server.

3. *Backend Setup*:
    bash
    cd server
    dotnet restore
    dotnet run
    
    This will restore the .NET packages and start the backend server.

4. *Database Setup*:
   - Ensure your SQL Server is running.
   - Update the connection string in the appsettings.json file located in the server directory.
   - Run the database migrations:
     bash
     dotnet ef database update
     
