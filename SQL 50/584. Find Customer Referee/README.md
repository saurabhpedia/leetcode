
## Query: Find Names of Customers Not Referred by Customer with id = 2

This SQL query retrieves the names of customers who are not referred by the customer with `id = 2` from the `Customer` table.

### Tables

#### Customer

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
| referee_id  | int     |

### Query

```sql
SELECT name
FROM Customer
WHERE referee_id IS NULL OR referee_id <> 2;
```

### Explanation

1. The `SELECT` statement is used to retrieve the `name` column from the `Customer` table.
2. The `WHERE` clause is used to filter the rows based on the condition `referee_id IS NULL OR referee_id <> 2`.
   - `referee_id IS NULL` checks if the customer has no referee, indicating they were not referred by anyone.
   - `referee_id <> 2` checks if the `referee_id` is not equal to 2, which means they were not referred by the customer with `id = 2`.
3. The query returns the names of customers who satisfy the condition.
4. The result can be returned in any order.

### Example

```sql
SELECT name
FROM Customer
WHERE referee_id IS NULL OR referee_id <> 2;
```

Output:
```
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
```

In this example, the query retrieves the names of customers who are not referred by the customer with `id = 2`. The output displays the names "Will", "Jane", "Bill", and "Zack" as they meet the specified condition. The order of the output may vary.