/*
Problem 6
Replace Employee ID With The Unique Identifier


Table: Employees

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| name          | varchar |
+---------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table contains the id and the name of an employee in a company.

Table: EmployeeUNI

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| unique_id     | int     |
+---------------+---------+
(id, unique_id) is the primary key (combination of columns with unique values) for this table.
Each row of this table contains the id and the corresponding unique id of an employee in the company.



problem

Write a solution to show the unique ID of each user, If a user does not have a unique ID replace just show null.

Return the result table in any order.

The result format is in the following example.


Sol:

SELECT e.name , u.unique_id  
FROM Employees e
LEFT JOIN   EmployeeUNI u
ON e.id = u.id;
*/