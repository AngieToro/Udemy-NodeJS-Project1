//const path = require('path');
//const rootDir = require('../util/path');
const Product = require('../models/products');


exports.getAddProduct = (req, res, next) => {

    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    //res.render('add-product',{docTitle: 'Add Product', path: '/admin/add-product'}); //pug
    //res.render('admin/add-product',
    res.render('admin/edit-product',
                {
                    docTitle: 'Add Product', 
                    path: '/admin/add-product',
                    editing: false
                    //formsCSS: true,           //handlebars
                    //productCSS: true,         //handlebars
                    //activeAddProduct: true    //handlebars
                });
};

exports.postAddProduct =  (req, res, next) => {
 
    //console.log(req.body);
    //products.push({title: req.body.title});
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect("/");
    
};

exports.getEditProduct = (req, res, next) => {

    const editMode = req.query.edit;
    console.log("editMode= ", editMode);

    if (!editMode) {
        return res.redirect('/');
    };

    const prodId = req.params.productId;
    console.log("id edit product= ", prodId);

    Product.findProductById(prodId, (product) => {
        
        if (!product){
            return res.redirect('/');
        };

        res.render('admin/edit-product',
                {
                    docTitle: 'Edit Product', 
                    path: '/admin/edit-product',
                    editing: editMode,
                    product: product
                });
    });
};

exports.postEditProducts = (req, res, next) => {


};

exports.getProducts = (req, res, next) => {

    Product.fetchAllProducts(products => {

        res.render('admin/products', 
                {
                    prods: products, 
                    docTitle: 'Admin Products', 
                    path: "/admin/products"
                    //hasProducst: products.length > 0,   //handlebars
                    //activeShop: true,                   //handlebars
                    //productCSS: true                    //handlebars
                }); 
    });

};