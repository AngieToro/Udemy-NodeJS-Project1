const fs = require('fs');
const path = require('path');

//const products = [];
const pathFolder = path.join(path.dirname(require.main.filename), 'data', 'products.json');

const getProductsFromFile = cb => {

    fs.readFile(pathFolder, (err, fileContent) => {

        if (err){

            return cb([]);

        } else {

            cb(JSON.parse(fileContent));

        };
    });
};

module.exports = class Product {

    constructor(titleProduct, imageUrl, description, price) {
        this.title = titleProduct;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    };

    save(){

        //products.push(this);

        this.id = Math.random().toString();
        
        getProductsFromFile(products => {

            products.push(this);

            fs.writeFile(pathFolder, JSON.stringify(products), (err) => {

                console.log("Error=", err);

            });
        });
    };

    static fetchAllProducts(cb){
        //the cb (callback) is for the function return something because the code is async 

        getProductsFromFile(cb);

        //return products;
    };

    static findProductById(id, cb){

        getProductsFromFile(products => {

            const product = products.find(p => p.id === id);
            cb(product);

        });
    };
};