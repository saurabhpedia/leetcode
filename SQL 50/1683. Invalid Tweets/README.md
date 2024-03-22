## 1683. Invalid Tweets

Table: Tweets

| Column Name | Type    |
|-------------|---------|
| tweet_id    | int     |
| content     | varchar |

`tweet_id` is the primary key (column with unique values) for this table. This table contains all the tweets in a social media app.

### Problem Statement

Write a solution to find the IDs of the invalid tweets. A tweet is considered invalid if the number of characters used in its content is strictly greater than 15.

Return the result table in any order.

### Example

#### Input

Tweets table:

| tweet_id | content                          |
|----------|----------------------------------|
| 1        | Vote for Biden                   |
| 2        | Let us make America great again! |

#### Output

| tweet_id |
|----------|
| 2        |

Explanation: 

- Tweet 1 has a length of 14 characters, so it is considered a valid tweet.
- Tweet 2 has a length of 32 characters, which exceeds the limit of 15 characters, making it an invalid tweet.

### Solution

To find the IDs of the invalid tweets, we can use the following SQL query:

```sql
SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) > 15;
```

This query selects the `tweet_id` from the `Tweets` table where the length of the `content` is greater than 15. The result will be the IDs of the invalid tweets.

The result table can be returned in any order.

This solution provides a way to identify the invalid tweets by checking the length of their content against the specified condition.