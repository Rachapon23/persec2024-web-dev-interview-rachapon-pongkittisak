SELECT order_year, SUM(net_price) AS total_price FROM (
  SELECT 
  YEAR(order_date) AS order_year
  , ( (quantity * unit_price) - (discount * quantity * unit_price) ) AS net_price
  FROM orders
  LEFT JOIN order_details ON order_details.order_id = orders.order_id
  LEFT JOIN products ON products.product_id = order_details.product_id
  WHERE ship_region = 'Western Europe'
 ) AS tb
GROUP BY order_year
