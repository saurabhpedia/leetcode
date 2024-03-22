
## 1148. Article Views I

### Authors Who Viewed Their Own Articles

Table: Views

| Column Name | Type  |
|-------------|-------|
| article_id  | int   |
| author_id   | int   |
| viewer_id   | int   |
| view_date   | date  |

There is no primary key (column with unique values) for this table, and the table may have duplicate rows. Each row indicates that a viewer viewed an article (written by an author) on a specific date. Note that when `author_id` and `viewer_id` are equal, it indicates the same person.

### Problem Statement

Write a solution to find all the authors who viewed at least one of their own articles. 

Return the result table sorted by `id` in ascending order.

### Example

#### Input

Views table:

| article_id | author_id | viewer_id | view_date  |
|------------|-----------|-----------|------------|
| 1          | 3         | 5         | 2019-08-01 |
| 1          | 3         | 6         | 2019-08-02 |
| 2          | 7         | 7         | 2019-08-01 |
| 2          | 7         | 6         | 2019-08-02 |
| 4          | 7         | 1         | 2019-07-22 |
| 3          | 4         | 4         | 2019-07-21 |
| 3          | 4         | 4         | 2019-07-21 |

#### Output

| id   |
|------|
| 4    |
| 7    |

Explanation: 

- Author 4 viewed their own article with `article_id` 3.
- Author 7 viewed their own articles with `article_id` 2 and 4.

### Solution

To find the authors who viewed at least one of their own articles, we can use the following SQL query:

```sql
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;
```

This query selects distinct `author_id` values from the `Views` table where `author_id` is equal to `viewer_id`, indicating that the author viewed their own article. The result is sorted by `id` in ascending order.

The result table provides the `id` of authors who viewed their own articles, fulfilling the given condition.