
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mainController = require('../api/controllers/mainController');


var app = express();
var uri = 'mongodb://localhost/ecommerce';
var port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, function(){
    console.log('Listening on port ' + port);
});

mongoose.connect(uri);
mongoose.connection.once('open', function(){
    console.log('Connected to db at ' + uri);
});

////////////ENDPOINTS///////////////////////////////////////


//add product
app.post('/api/products', mainController.addProduct);

//add comment
app.post('/api/comments', mainController.addComment);

//find all products
app.get('api/products', mainController.getProducts);

//find product by query
app.get('/api/products', mainController.queryProduct);

//find product by id
app.get('/api/products/:id', mainController.findProdById);

//change product by ID / req.body contents
app.put('/api/products/:id', mainController.updateProdById);

//delete product by ID
app.delete('/api/products/:id', mainController.deleteProdById);

//delete comment by ID
app.delete('/api/comments/:id', mainController.deleteCommById);





