CREATE DATABASE BookShop;

Use BookShop;

Create table Registration(ID INT IDENTITY(1,1) Primary Key,
UserName Varchar(100), Password Varchar(100),
Email Varchar(100),IsActive INT);

CREATE TABLE Books (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(255) NOT NULL,
    Genre NVARCHAR(100),
    Price DECIMAL(18, 2) NOT NULL,
    CoverImageUrl NVARCHAR(500)
);

CREATE TABLE CartItems (
    Id INT PRIMARY KEY IDENTITY(1,1),
    BookId INT NOT NULL,
    Quantity INT NOT NULL,
    FOREIGN KEY (BookId) REFERENCES Books(Id)
);


SELECT * FROM Registration;
SELECT * FROM Books;
SELECT * FROM CartItems;