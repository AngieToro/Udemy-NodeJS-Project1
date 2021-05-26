const Product = require('../models/products');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {

    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    //console.log(path.join(rootDir, 'views', 'shop.html'));

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.render('shop'); //render the template engine located in views folder
    //res.render('shop', {prods: products, docTitle: 'Shop', path: "/"}); //pug
    
    Product.fetchAllProducts(products => {

        res.render('shop/product-list', 
                {
                    prods: products, 
                    docTitle: 'All Products', 
                    path: "/procuts"
                    //hasProducst: products.length > 0,   //handlebars
                    //activeShop: true,                   //handlebars
                    //productCSS: true                    //handlebars
                }); 
    });
};

exports.getProduct = (req, res, next) => {

    const prodId = req.params.productId;
    Product.findProductById(prodId, product => {

        res.render('shop/product-detail', 
                    {
                        product: product,
                        docTitle: 'Product Detail - ' + product.title,
                        path: '/products'
                    });
    });
};

exports.getIndex = (req, res, next) => {

    Product.fetchAllProducts(products => {

        res.render('shop/index', 
                {
                    prods: products, 
                    docTitle: 'Shop', 
                    path: "/"
                    //hasProducst: products.length > 0,   //handlebars
                    //activeShop: true,                   //handlebars
                    //productCSS: true                    //handlebars
                }); 
    });
};

exports.getCart = (req, res, next) => {

    Cart.getProductsCart(cart => {
        Product.fetchAllProducts(products => {

            const cartProducts = [];
            for (product of products){

                const cartProductData = cart.products.find(prod => prod.id === product.id);

                if (cartProductData){

                    cartProducts.push({ productData: product, quantity: cartProductData.quantity });
                };
            };

            res.render('shop/cart', 
            {
                docTitle: 'Your cart',
                path: '/cart',
                products: cartProducts
            });
        });
    });
};

exports.postCart = (req, res, next) => {

    const prodId = req.body.productId;  //name input on the body 
    console.log("product ID cart= ", prodId);
    Product.findProductById(prodId, (product) => {
        Cart.addProudctCart(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.getChekout = (req, res, next) => {

    res.render('shop/checkout', 
    {
        docTitle: 'Checkout',
        path: '/checkout'
    });
};

exports.getOrders = (req, res, next) => {

    res.render('shop/orders', 
    {
        docTitle: 'Your orders',
        path: '/orders'
    });
};
