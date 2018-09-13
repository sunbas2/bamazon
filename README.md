# bamazon

Hello!

Please refer to the images file to see that my application works!

![Image 1 -> Look at Hat, there is 194 left ](https://github.com/sunbas2/bamazon/blob/master/images/1.png "Look at the Hat inventory there is 194 left!")

![Image 2 -> Running code, making purchase of hat.  ](https://github.com/sunbas2/bamazon/blob/master/images/2.png "Running the code in node as you can see the user is making a Hat purchase")

![Image 3 -> Done, as you can see the hat inventory decreased by 1. ](https://github.com/sunbas2/bamazon/blob/master/images/3.png "The Hat inventory decreased by 1 as the user or buyer purchased the item")



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
