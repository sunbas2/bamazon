// require the following in order to access mysql and use inquirer function
var inquirer = require('inquirer');
var mysql = require('mysql');

// create mySQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 5000,
    user: "root",
    password: "root",
    database: "bamazon"
  });
  
  // connect to mySQL database to extract product listing
  connection.connect();
  connection.query(`SELECT * FROM products`, function(err, productListing){
      if (err) throw err;
      console.log("Greetings from Bamazon! Please choose from the following items below!");
        // this forloop will display the product list available for user to choose from 
      for(var i = 0; i < productListing.length;i++){
          console.log(
              "item_id: " + productListing[i].item_id + " " + 
              "product_name " + productListing[i].product_name + " " + 
              "department_name " + productListing[i].department_name + " " + 
              "price: " + productListing[i].price + " " + 
              "stock_quantity " + productListing[i].stock_quantity);
         
        }
  });
  
  //Ask user what product ID and quantity they would like to purchase using inquirer
  function userPurchasePrompt() {
      
      inquirer.prompt([
          {
              type: "input",
              name: "item_id",
              message: "What is the ID of the product you would like to buy?",
              validate: intValue,
              filter: Number
          },
          {
              type: "input",
              name: "quantity",
              message: "How many units of the product they would like to buy?",
              validate: intValue,
              filter: Number
          }
      ]).then(function(order) {
          
// extract product id and quantity

          var item = order.item_id;
          var quantity = order.quantity;
  
          
          var StorageInfo = 'SELECT * FROM products WHERE ?';
  
          connection.query(StorageInfo, {item_id: item}, function(err, data) {
              if (err) throw err;
                  
              if (data.length === 0) {
                  console.log('Incorrect Item ID.');
                  showInventory();
  
              } else {
                  var productData = data[0];
  
                  if (quantity <= productData.stock_quantity) {
                      console.log('Item you selected is in stock.');
  
                      
                      var updateStorageInfo = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                  
                      connection.query(updateStorageInfo, function(err, data) {
                          if (err) throw err;
  
                          console.log('Your order has been received! The total is $' + productData.price * quantity);
                          console.log('Thank you for shopping with Bamazon! Have a great day!');
                                                    
                          connection.end();
                      })
                  } else {
                      console.log('Not available.');
                      console.log('Check your order.');
                      showInventory();
                  }
              }
          })
      })
  }
  
// Confirm if user inputs integers not strings to ensure correct values are inputted
function intValue(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Insufficient quantity!';
	}
}

// SHOW inventory to user of what is available 
  function showInventory() {
      
    StorageInfo = 'SELECT * FROM products';
  
      
      connection.query(StorageInfo, function(err, data) {
          if (err) throw err;
  
          console.log('current Inventory: ');
            
          var whatisAvailable = '';
          for (var i = 0; i < data.length; i++) {
            whatisAvailable = '';
            whatisAvailable += 'Item ID: ' + data[i].item_id + '  //  ';
            whatisAvailable += 'Product Name: ' + data[i].product_name + '  //  ';
            whatisAvailable += 'Department: ' + data[i].department_name + '  //  ';
            whatisAvailable += 'Price: $' + data[i].price + '\n';
  
              console.log(whatisAvailable);
          }
            
            userPurchasePrompt();
      })
  }
  
  function myStore() {
    showInventory();
  }
    
  myStore();