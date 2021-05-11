const express = require('express');
const boydParser = require('body-parser');
const path = require('path');

const dataAdmin = require('./routes/admin');
const routerShop = require('./routes/shop');

const appExpress = express();

appExpress.set('view engine', 'pug'); //template engine type of pug
appExpress.set('views','views'); //the firts parameter is the folder default, the second parameters is where the html files are in the proyect 


//middleware general
appExpress.use(boydParser.urlencoded({extended: false}));
appExpress.use(express.static(path.join(__dirname, 'public'))); //access to the public folder 

//middleware proyect
/* appExpress.use('/',(req, res, next) => {}); */

appExpress.use('/admin', dataAdmin.routers);
appExpress.use(routerShop);

appExpress.use('/', (req, res, next) => {

    //res.status(404).sendFile(path.join(__dirname, 'views', 'errorPage.html'));
    res.status(404).render('errorPage', {docTitle: 'Page Not Found'});

});

appExpress.listen(3000);