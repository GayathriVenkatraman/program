-- This file contains the initial data for the phonebook database.
-- It is intended to be used with SQLite.
-- You can execute this SQL statements to bootstrap the database.

-- Enable foreign keys (must be done at runtime in SQLite)
PRAGMA foreign_keys = ON;

CREATE TABLE `contacts` (
  `id` INTEGER PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `phonenumber` varchar(255) NULL
);

INSERT INTO contacts (id, name, email, phone) values (1, 'Brandon Bean', '22334455');
