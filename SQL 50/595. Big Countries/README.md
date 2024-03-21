
## Query: Find Name, Population, and Area of Big Countries

This SQL query retrieves the `name`, `population`, and `area` columns from the `World` table for countries that are considered big based on their area or population.

### Tables

#### World

| Column Name | Type    |
|-------------|---------|
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |

### Query

```sql
SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;
```

### Explanation

1. The `SELECT` statement is used to retrieve the `name`, `population`, and `area` columns from the `World` table.
2. The `WHERE` clause is used to filter the rows based on the conditions `area >= 3000000` or `population >= 25000000`.
   - `area >= 3000000` checks if the country has an area of at least three million km^2.
   - `population >= 25000000` checks if the country has a population of at least twenty-five million.
3. The query returns the `name`, `population`, and `area` values for countries that satisfy either of the conditions.
4. The result can be returned in any order.

### Example

```sql
SELECT name, population, area
FROM World
WHERE area >= 3000000 OR population >= 25000000;
```

Output:
```
+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
```

In this example, the query retrieves the `name`, `population`, and `area` columns from the `World` table for countries that are considered big based on their area or population. The output displays the information for countries Afghanistan and Algeria, as they meet either the area or population criteria. The order of the output may vary.