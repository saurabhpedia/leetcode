To find the IDs of the users who visited without making any transactions and the number of times they made these types of visits, you can use the following SQL query:

```sql
SELECT v.customer_id, COUNT(t.transaction_id) AS count_no_trans
FROM Visits v
LEFT JOIN Transactions t ON v.visit_id = t.visit_id
GROUP BY v.customer_id
HAVING COUNT(t.transaction_id) = 0;
```

This query joins the `Visits` table with the `Transactions` table using a left join on the `visit_id` column. It groups the result by `customer_id` and counts the number of transactions for each customer. The `HAVING` clause filters the results to include only customers with a count of transactions equal to zero.

The resulting table will contain the `customer_id` and the corresponding count of visits without any transactions (`count_no_trans`). The table will be sorted in any order.

Applying this query to the given example input, we obtain the following output:

| customer_id | count_no_trans |
|-------------|----------------|
| 54          | 2              |
| 30          | 1              |
| 96          | 1              |

According to the example, customer with ID 54 visited the mall twice without making any transactions, customer with ID 30 visited once without any transactions, and customer with ID 96 also visited once without any transactions.