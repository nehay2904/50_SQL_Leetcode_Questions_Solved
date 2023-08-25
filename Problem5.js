/*
Problem 5: Invalid Tweets;

Table: Tweets

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| tweet_id       | int     |
| content        | varchar |
+----------------+---------+
tweet_id is the primary key (column with unique values) for this table.
This table contains all the tweets in a social media app.

Problem:
Write a solution to find the IDs of the invalid tweets.
The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.


Solution:


SELECT tweet_id
FROM Tweets
WHERE  LENGTH(content) > 15;
*/