# Optional read: SQL part 2

This sections explains more advanced concepts and by no means is required in this module.

## Aggregate Functions

- `AVG(column)` - Average
- `COUNT(column)` - Count non-null
- `SUM(column)` - Total sum
- `MIN(column)` - Minimum
- `MAX(column)` - Maximum
- **AVG**: Average value
- **COUNT**: How many rows
- **SUM**: Total
- **MIN**/**MAX**: Smallest/largest value

Example:

```sql
SELECT AVG(age) FROM users;
SELECT COUNT(*) FROM posts WHERE published = TRUE;
SELECT course_id, AVG(grade) FROM enrollments GROUP BY course_id;
```

## HAVING vs WHERE

- `WHERE` filters rows **before** grouping.
- `HAVING` filters groups **after** the `GROUP BY`.

```sql
  -- Group and filter groups
SELECT customer_id, SUM(total) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(total) > 1000;
```

## Aliases

Aliases in SQL can serve two purposes:

### 1. Aliases on tables for easier access to values

When writing complex joins or other types of convoluted queries, especially when naming of the tables is very detailed, creating an alias on the table name can make your query writing time faster.

**Example:**

```sql
SELECT course.name, enrollments.date, enrollments.term
FROM course
JOIN enrollments
ON course.id = enrollments.course_id
WHERE enrollments.date > '2025-11-01'
```

the above query using aliases can be shortened like so:

```sql
SELECT c.name, e.date, e.term
FROM course c -- using alias on table "course": alias = "c"
JOIN enrollments e -- using alias on table "enrollments"
ON c.id = e.course_id -- using aliases to access values
WHERE e.date > '2025-11-01'
```

Two queries above are exactly the same in terms of functionality. Aliases were used only to avoid retyping long words like "enrollments" over and over.

#### 2. Aliases on values for cleaner display

You can also add aliases to selected values for cleaner display of the query output. To do that, you must use keyword `as`.

```sql
SELECT c.name as COURSE_NAME, e.date as ENROLLMENT_DATE, e.term as TERM
FROM course c -- using alias on table "course": alias = "c"
JOIN enrollments e -- using alias on table "enrollments"
ON c.id = e.course_id -- using aliases to access values
WHERE e.date > '2025-11-01'
```

the output of your query will be provided with column names in the output table like so:

```sql
COURSE_NAME | ENROLLMENT_DATE | TERM
```

instead of:

```sql
c.name | e.date | e.term
```

## Data Definition and Manipulation

In this section, you are going to have a nifty cheat-sheet for DB manipulation queries. Before that you need to understand what a database schema is.

### Schema

- A **schema** is like a **blueprint** or **map** of your database.
- It includes:
  - Tables
  - Columns for each table and their data types (e.g., INTEGER, VARCHAR, DATE)
  - Primary keys and foreign keys
  - Indexes (for faster querying)
  - Constraints:
    - `NOT NULL`: Column must have a value
    - `UNIQUE`: No duplicates allowed
    - `CHECK`: Validate values against a rule (e.g., age >= 18)
    - `DEFAULT`: Default value if none provided
  - Views (virtual tables based on SELECT queries)
  - Stored procedures and functions
  - Triggers (automated actions on data changes)

**Example:**

```text
Schema: ecommerce
Tables:
  - users (id PK, email UNIQUE NOT NULL, created_at DEFAULT CURRENT_TIMESTAMP)
  - orders (id PK, user_id FK → users.id, total CHECK(total >= 0))
  - products (id PK, name NOT NULL, price DECIMAL)
Indexes:
  - idx_user_email ON users(email)
Views:
  - active_users AS SELECT * FROM users WHERE active = true;
```

### Data Definition Language (DDL)

- Commands that define or change structure.
- Examples: CREATE, ALTER, DROP.

### Creating Tables

```sql
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100),
  birthdate DATE
);
```

### Altering Tables

```sql
ALTER TABLE students ADD email VARCHAR(100);
```

### Indexes

- Speeds up searching.

```sql
CREATE INDEX idx_name ON students(name);
```

### Foreign Key Constraints

- Ensures a link between tables.

```sql
ALTER TABLE enrollments
ADD FOREIGN KEY (student_id) REFERENCES students(student_id);
```
