/*
Problem 2: Find Customer Referee

Table: Customer

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
In SQL, id is the primary key column for this table.
Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.


Solution:
SELECT  name     (select the colums which u need as output )
FROM Customer     (from the table where the column is present)
WHERE referee_id IS NULL OR referee_id   <> 2;  (3rd line is a condition where we use WHERE and in this case the refered id either should be null for this we use IS NULL or another condition was that it should be not equal to 2 so we used <> operator)
*/