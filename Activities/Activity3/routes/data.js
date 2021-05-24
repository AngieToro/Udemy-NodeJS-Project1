const express = require('express');
const router = express.Router();

const user = [];

router.get('/', (req, res, next) => {

    res.render('add-user',
        {
            docTitle: 'Add user'
        });

});

router.post('/add-user', (req, res, next) => {
 
    console.log(req.body);
    user.push({name: req.body.name});
    res.redirect("/users");
    
});

exports.routers = router;
exports.users = user;