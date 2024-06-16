SELECT  
tb1.product_name
, tb1.total_order + tb2.total_order AS total_order
FROM (
  SELECT
  products.product_id
  , product_name
  , SUM(quantity) AS total_order
  , YEAR(order_date) AS order_year 
  FROM orders
  LEFT JOIN order_details ON orders.order_id = order_details.order_id 
  LEFT JOIN products ON products.product_id = order_details.product_id
  WHERE YEAR(order_date) IN (2016)
  GROUP BY products.product_id, order_year
  ORDER BY total_order DESC
  LIMIT 5
) AS tb1
INNER JOIN (
  SELECT
  products.product_id
  , product_name
  , SUM(quantity) AS total_order
  , YEAR(order_date) AS order_year 
  FROM orders
  LEFT JOIN order_details ON orders.order_id = order_details.order_id 
  LEFT JOIN products ON products.product_id = order_details.product_id
  WHERE YEAR(order_date) IN (2017)
  GROUP BY products.product_id, order_year
  ORDER BY total_order DESC
  LIMIT 5
) AS tb2 ON tb1.product_id = tb2.product_id
ORDER BY total_order DESC