
## Problem Statement

Given two tables, "Employees" and "EmployeeUNI," the task is to show the unique ID of each employee. If an employee does not have a unique ID, it should be represented as null. The result table should be returned in any order.

### Tables

**Employees:**

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |

- id: Primary key (column with unique values) for this table.
- Each row contains the id and name of an employee in a company.

**EmployeeUNI:**

| Column Name | Type |
|-------------|------|
| id          | int  |
| unique_id   | int  |

- (id, unique_id): Primary key (combination of columns with unique values) for this table.
- Each row contains the id and the corresponding unique id of an employee in the company.

## Solution

The solution involves joining the two tables using the "id" column and retrieving the unique_id for each employee. If an employee does not have a unique_id, it should be represented as null.

```sql
SELECT
    e.name,
    eu.unique_id
FROM
    Employees e
LEFT JOIN
    EmployeeUNI eu ON e.id = eu.id
ORDER BY
    e.id;
```

The above SQL query performs a left join on the "id" column, matching records from both tables. It selects the employee name from the Employees table and the corresponding unique_id from the EmployeeUNI table. The result is ordered by the employee id.

## Example

### Input

Employees table:

| id  | name     |
|-----|----------|
| 1   | Alice    |
| 7   | Bob      |
| 11  | Meir     |
| 90  | Winston  |
| 3   | Jonathan |

EmployeeUNI table:

| id  | unique_id |
|-----|-----------|
| 3   | 1         |
| 11  | 2         |
| 90  | 3         |

### Output

| name     | unique_id |
|----------|-----------|
| Alice    | null      |
| Bob      | null      |
| Meir     | 2         |
| Winston  | 3         |
| Jonathan | 1         |

The output table shows the unique_id for each employee. Alice and Bob do not have a unique_id, so they are represented as null. Meir has a unique_id of 2, Winston has 3, and Jonathan has 1.

This concludes the solution in Markdown format.