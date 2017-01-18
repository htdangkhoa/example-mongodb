var config = require("./config");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var express = require("express");

//Connect to mongoDB.
mongoose.connect(config.database);

var app = express();
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

//Use routes.
app.use('/api', require('./routes/api_users'));

//Start server.
app.listen(port, function(){
	console.log("Connected");
})