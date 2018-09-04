# bamazon

Hello!

Please refer to the images file to see that my application works!



MY SQL CODE
CREATE TABLE products (
	item_id integer not null primary key auto_increment,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(50) NOT NULL,
	price INT NOT NULL, 
	stock_quantity INT NOT NULL
);
	
SELECT * from products;    

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (001, "Chair", "Furniture", 50, 100);
