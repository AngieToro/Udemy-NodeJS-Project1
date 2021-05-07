const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {

    console.log("Middleware that handle /users");
    res.send("<h1> Welcome Users</h1>");

});

app.use('/add', (req, res, next) => {

    console.log("Middleware that handler /add");
    next();

});

app.use('/', (req, res, next) => {

    console.log("Middleware that handler /");
    res.send("<h1> Welcome to my new server using NodeJS and ExpressJS</h1>");

});

app.listen(3000);