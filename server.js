const express = require('express');
const boydParser = require('body-parser');
const path = require('path');

const routerAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');

const appExpress = express();

//middleware general
appExpress.use(boydParser.urlencoded({extended: false}));
appExpress.use(express.static(path.join(__dirname, 'public'))); //access to the public folder 

//middleware proyect
/* appExpress.use('/',(req, res, next) => {}); */

appExpress.use('/admin',routerAdmin);
appExpress.use(routerShop);

appExpress.use('/', (req, res, next) => {

    res.status(404).sendFile(path.join(__dirname, 'views', 'errorPage.html'));

});

appExpress.listen(3000);