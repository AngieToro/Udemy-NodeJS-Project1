const path = require('path');
const rootDir = require('../util/path');

const products = [];

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
 
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect("/");
    
};

exports.getProducts = (req, res, next) => {

    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    //console.log(path.join(rootDir, 'views', 'shop.html'));

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.render('shop'); //render the template engine located in views folder
    //res.render('shop', {prods: products, docTitle: 'Shop', path: "/"}); //pug
    res.render('shop', 
                {
                    prods: products, 
                    docTitle: 'Shop', 
                    path: "/", 
                    hasProducst: products.length > 0,
                    activeShop: true,
                    productCSS: true
                }); //handlebars
}