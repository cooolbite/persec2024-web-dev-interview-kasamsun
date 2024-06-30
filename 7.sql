SELECT
    YEAR(o.shipped_date) AS year,
    SUM(od.quantity * (p.unit_price - od.discount)) AS total_sales
FROM
    orders o
    JOIN order_details od ON o.order_id = od.order_id
    JOIN products p ON od.product_id = p.product_id
    JOIN customers c ON o.customer_id = c.customer_id
WHERE
    c.region = 'Western Europe'
GROUP BY
    YEAR(o.shipped_date)
ORDER BY
    year ASC;
