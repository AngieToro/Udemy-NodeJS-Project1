const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const dataAdmin = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {

    //res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    //console.log(path.join(rootDir, 'views', 'shop.html'));

    const products = dataAdmin.products;

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.render('shop'); //render the template engine located in views folder
    res.render('shop', {prods: products, docTitle: 'Shop', path: "/"});
});

module.exports = router;