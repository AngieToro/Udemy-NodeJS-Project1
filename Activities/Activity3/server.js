const express = require('express');
const boydParser = require('body-parser');

const data = require('./routes/data');
const dataUser = require('./routes/user');

const appExpress = express();

appExpress.set('view engine', 'ejs'); 
appExpress.set('views','Activity3/views');

appExpress.use(boydParser.urlencoded({extended: false}));

appExpress.use(data.routers);
appExpress.use('', dataUser.routers);

appExpress.listen(3000); 