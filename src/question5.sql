SELECT 
product_name
,  SUM(quantity) AS total_order
FROM order_details 
LEFT JOIN products ON products.product_id = order_details.product_id
GROUP BY products.product_id
ORDER BY total_order DESC
LIMIT 5