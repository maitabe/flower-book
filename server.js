//after-hours branch
var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/nameDB');

var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

//populate the req.body with the data that we're sending from the client.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// public access from client-side
app.use(express.static('public'));
app.use(express.static('node_modules'));

/*app.use('/', routes);
app.use('/users', users);*/


var flowers = {};
var translations = {};

//getFlowers api third party
request('http://52.51.81.191:85/getFlowers', function(error, response, body) {
	getFlowers = JSON.parse(body);
});

//getTranslation api third party
request('http://52.51.81.191:85/getTranslate', function(error, response, body) {
	translations = JSON.parse(body);
});

//api's or entry point to access the data

//"get" data flowers
app.get('/flowers', function(req, res, next) {
	console.log('/flowers');
	var mergedObj = {flowers: getFlowers, tran: translations};
	var allData = JSON.stringify(mergedObj);
	res.json(allData);

});


var port = process.env.PORT || '8000';

app.listen(port, function() {
	console.log('server is up and running on ' + port);
});











