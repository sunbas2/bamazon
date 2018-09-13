# bamazon

Hello!

Please refer to the images file to see that my application works!

 Look at Hat item_id 7, there is 194 left ![Image 1](https://github.com/sunbas2/bamazon/blob/master/images/1.png "Look at Hat item_id 7, there is 194 left")

Running the code in node as you can see the user is purchasing item_id 7 a Hat!  ![Image 2](https://github.com/sunbas2/bamazon/blob/master/images/2.png "Running the code in node as you can see the user is purchasing item_id 7 a Hat!")

The Hat inventory decreased by 1 as the user or buyer purchased the item ![Image 3 -> Done, as you can see the hat inventory decreased by 1. ](https://github.com/sunbas2/bamazon/blob/master/images/3.png "The Hat inventory decreased by 1 as the user or buyer purchased the item")



-----------------------------------------------------------------------

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
