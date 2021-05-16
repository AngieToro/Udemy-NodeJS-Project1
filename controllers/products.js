//const path = require('path');
//const rootDir = require('../util/path');
const Product = require('../models/products');


exports.getAddProduct = (req, res, next) => {

    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //res.render('add-product',{docTitle: 'Add Product', path: '/admin/add-product'}); //pug
    res.render('add-product',
                {
                    docTitle: 'Add Product', 
                    path: '/admin/add-product',
                    formsCSS: true,
                    productCSS: true,
                    activeAddProduct: true
                });
};

exports.postAddProduct =  (req, res, next) => {
 
    //console.log(req.body);
    //products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
    
};

exports.getProducts = (req, res, next) => {

    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    //console.log(path.join(rootDir, 'views', 'shop.html'));

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.render('shop'); //render the template engine located in views folder
    //res.render('shop', {prods: products, docTitle: 'Shop', path: "/"}); //pug
    
    Product.fetchAll(products => {

        res.render('shop', 
                {
                    prods: products, 
                    docTitle: 'Shop', 
                    path: "/", 
                    hasProducst: products.length > 0,   //handlebars
                    activeShop: true,                   //handlebars
                    productCSS: true                    //handlebars
                }); 
    });
};