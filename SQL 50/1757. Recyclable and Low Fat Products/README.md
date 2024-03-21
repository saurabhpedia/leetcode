
## Query: Find IDs of Products that are Low Fat and Recyclable

This SQL query retrieves the `product_id` values from the `Products` table for products that are both low fat and recyclable.

### Tables

#### Products

| Column Name | Type  |
|-------------|-------|
| product_id  | int   |
| low_fats    | enum  |
| recyclable  | enum  |

### Query

```sql
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
```

### Explanation

1. The `SELECT` statement is used to retrieve the `product_id` column from the `Products` table.
2. The `WHERE` clause is used to filter the rows based on the conditions `low_fats = 'Y'` and `recyclable = 'Y'`.
   - `low_fats = 'Y'` checks if the product is low fat.
   - `recyclable = 'Y'` checks if the product is recyclable.
3. The query returns the `product_id` values for products that satisfy both conditions.
4. The result can be returned in any order.

### Example

```sql
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
```

Output:
```
+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
```

In this example, the query retrieves the `product_id` values for products that are both low fat and recyclable. The output shows the product IDs 1 and 3, as they meet the specified conditions. The order of the output may vary.