//  Problem no 1 : Recyclable and Low Fat Products
/*

Table: Products

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
product_id is the primary key (column with unique values) for this table.
low_fats is an ENUM (category) of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.
recyclable is an ENUM (category) of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.


Problem: 
Write a solution to find the ids of products that are both low fat and recyclable.

Return the result table in any order.

The result format is in the following example.


Sol:


SELECT product_id   (select the colums which u need as output )

FROM Products      (from the table where the column is present)

WHERE recyclable ="Y" AND low_fats ="Y" ; (3rd line is a condition where we use WHERE and though there are two conditions AND is used)
*/
