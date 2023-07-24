# Suppose you have a database with three tables: "users", "orders", and "products".
# The "users" table contains columns id, name, and email.
# The "orders" table contains columns id, user_id, product_id, quantity, and created_at.
# The "products" table contains columns id, name, price, and category.

# Write a single SQL query that returns a list of all users
# who have made at least 3 orders in the "Electronics" category
# and have spent more than $1000 on those orders,
# sorted by the total amount they have spent in descending order.
# The output should include the user's name, email, and the total
# amount they have spent on "Electronics" orders.

SELECT
    u.name,
    u.email,
    SUM(o.quantity * p.price) AS total_amount_spent
FROM
    users u
INNER JOIN
    orders o ON u.id = o.user_id
INNER JOIN
    products p ON o.product_id = p.id
WHERE
    p.category = 'Electronics'
GROUP BY
    u.id, u.name, u.email
HAVING
    COUNT(o.id) >= 3 AND SUM(o.quantity * p.price) > 1000
ORDER BY
    total_amount_spent DESC;