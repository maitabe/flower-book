var express = require('express');
var bodyParser = require('body-parser');
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



//flowers data
var flowers = [
{"name":"rose",
"bestseason":"fall",
"imagelink":"http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"},
{"name":"Calla lily",
"bestseason":"summer",
"imagelink":"https://www.gardenia.net/rendition.slider_detail/uploads/plant/1429882990-890258a76fbc11f3a/41305.jpg"},
{"name":"sunset safari",
"bestseason":"winter",
"imagelink":"http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/792/safari%20sunset1.jpg"},
{"name":"hypericum","best season":"winter","image link":"http://chrysalflowerfood.com/blog/wp-content/uploads/2014/04/Hot-Pink-Bouquet-Filled-with-Callas-Gomphrena-Hot-Pink-Princess-Roses-and-Bright-Green-Hypericum-Berries-The-French-Bouquet-James-Walton-Photo.jpg"},
{"name":"orchid Phalaenopsis",
"bestseason":"winter to spring",
"imagelink":"http://agroflora.ru/wp-content/uploads/2015/08/cvetok-orhidei.jpg"}
]

//api third party

//api's or entry point to access the data

//"get" data
app.get('/flowers', function(req, res, next) {
	console.log('/flowers');
	res.json(flowers);

});


var port = process.env.PORT || '8000';

app.listen(port, function() {
	console.log('server is up and running on ' + port);
});











