var express = require('express');
var app     = express();
var router  = express.Router();

var User = require('../models/users');

router.use(function(req, res, next) {
    // do logging.
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here.
});

User.methods(['get', 'post', 'put', 'delete']);
User.register(router, '/api_users');

// return route.
module.exports = router;