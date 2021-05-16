const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

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

    constructor(titleProduct) {
        this.title = titleProduct
    };

    save(){

        //products.push(this);

        getProductsFromFile(products => {

            products.push(this);

            fs.writeFile(pathFolder, JSON.stringify(products), (err) => {

                console.log("Error=", err);

            });
        });
    };

    static fetchAll(cb){
        //the cb (callback) is for the function return something because the code is async 

        getProductsFromFile(cb);

        //return products;
    };
};