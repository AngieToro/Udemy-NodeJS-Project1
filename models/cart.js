const fs = require('fs');
const path = require('path');

const pathFolder = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Cart {

    static addProudct (id, productPrice){

        //Fetch the previous cart
        fs.readFile(pathFolder, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err){
                cart = JSON.parse(fileContent);
                console.log("cart= ", cart);
            };

            //Analyze the cart -> Find existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updateProduct;

            //add a new product, increase quantity
            if (existingProduct) {  //replace the item
                updateProduct = {...existingProduct};
                updateProduct.quantity = updateProduct.quantity + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updateProduct;
            } else{ //add the item
                updateProduct = 
                    { 
                        id: id,
                        quantity: 1
                    };
                cart.products = [...cart.products, updateProduct];
            };

            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(pathFolder, JSON.stringify(cart), err => {

                console.log("Error carrt= ", err);
            });
        });
    };
};