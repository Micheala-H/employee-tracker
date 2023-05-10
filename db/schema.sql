DROP DATABASE IF EXISTS employee_db;

CREATE employee_db;

USE employee_db;


CREATE TABLE department (
    id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL,

);

CREATE TABLE roles (
    id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary INT,
    FOREIGN KEY (department),
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    manager VARCHAR(30),
    FOREIGN KEY (department),
    FOREIGN KEY (roles)
);

