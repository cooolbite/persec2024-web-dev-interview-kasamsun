WITH top_products_2016 AS (
  SELECT
    p.product_name,
    SUM(od.quantity) AS total_quantity_sold
  FROM
    products p
    JOIN order_details od ON p.product_id = od.product_id
    JOIN orders o ON od.order_id = o.order_id
  WHERE
    o.order_date BETWEEN '2016-01-01' AND '2016-12-31'
  GROUP BY
    p.product_name
  ORDER BY
    total_quantity_sold DESC
  LIMIT 5
),
top_products_2017 AS (
  SELECT
    p.product_name,
    SUM(od.quantity) AS total_quantity_sold
  FROM
    products p
    JOIN order_details od ON p.product_id = od.product_id
    JOIN orders o ON od.order_id = o.order_id
  WHERE
    o.order_date BETWEEN '2017-01-01' AND '2017-12-31'
  GROUP BY
    p.product_name
  ORDER BY
    total_quantity_sold DESC
  LIMIT 5
)
SELECT
  t2016.product_name,
  t2016.total_quantity_sold AS total_quantity_sold_2016,
  t2017.total_quantity_sold AS total_quantity_sold_2017
FROM
  top_products_2016 t2016
  JOIN top_products_2017 t2017 ON t2016.product_name = t2017.product_name
ORDER BY
  t2016.total_quantity_sold DESC;
