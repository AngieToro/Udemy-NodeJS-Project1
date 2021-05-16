const express = require('express');
const router = express.Router();

const dataUsers = require('./data');

router.get('/users', (req, res, next) => {

    const users = dataUsers.users;

    res.render('users',
    {
        docTitle: 'Users',
        users : users
    });  
});

exports.routers = router;