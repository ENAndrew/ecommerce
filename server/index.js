
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mainController = require('../public/api/controllers/mainController');
var nodemailer = require('nodemailer');


var app = express();
var uri = 'mongodb://104.237.142.245:27017/zorg_site';
var port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('../public'));

app.listen(port, function(){
    console.log('Listening on port ' + port);
});

mongoose.connect(uri);
mongoose.connection.once('open', function(){
    console.log('Connected to db at ' + uri);
});

////////////ENDPOINTS///////////////////////////////////////


//add product
app.post('/public/api/products', mainController.addProduct);

//add comment to product
app.put('/public/api/products/comments/:id', mainController.addComment); //embedding, not using schema

//find all products
app.get('/public/api/products', mainController.getProducts);

//find product by query
app.get('/public/api/products', mainController.queryProduct);

//find product by id
app.get('/public/api/products/:id', mainController.findProdById);

//change product by ID / req.body contents
app.put('/public/api/products/:id', mainController.updateProdById);

//delete product by ID
app.delete('/public/api/products/:id', mainController.deleteProdById);

//delete comment by ID
app.put('/public/api/products/:productId/:commentId', mainController.deleteCommById);

//send Email 
app.post('/public/api/postEmail', function(req, res){
        
        //Transporter object for nodemailer
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: '***',
                pass: '***'
            } //email is functional, auth info removed for public repo. 
            //This version has a modal error mesasge when user attempts to send mail.  
        });
    
        var mailOptions = {
            from: req.body.from,
            to: 'erica.nicole.andrew@gmail.com',
            subject: 'Mail to Zorg',
            text: req.body.text
        };

        transporter.sendMail(mailOptions, function(err, result){
            if(err){
                return console.log(err);
            };
        });
    });




