var mongoose = require('mongoose');
var Product = require('../models/Product');
//var Comment = require('../models/Comment');

module.exports = {
    
    addProduct: function(req, res, next){
        
        var newProduct = new Product(req.body);

        newProduct.save(function(err, result){
            if(err) {
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
        });
    },
    
    getProducts: function(req, res){
        
        Product.find({}, function(err, result){
            if(err) {
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
        });
        
    },
    
    addComment: function(req, res){
    
       if(!req.params.id) {
            return res.status(400).send('id parameter needed');
        }
    
        var query = {};

        if(req.params.id){
            query._id = mongoose.Types.ObjectId(req.params.id);
        }; 
        
        Product.findByIdAndUpdate(query, {$push: {comments: req.body}}, function(err, result){
            
            if(err){
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
            
        });
        
        //BELOW IS THE HARD WAY
        
//        Product.findOne(query, function(err, result){
//            if(err) {
//                res.status(500).send(err);
//            };
//            
//            var currentProduct = result;  //Result includes _id value, causes error
//            
//            //Need to eliminate the _id key/value, however delete does not work on declared variables
//            //Rebuilding the correct key/value object structure here
//            var sendProduct = {
//                quantity: currentProduct.quantity,
//                price: currentProduct.price,
//                photoSrc: currentProduct.photoSrc,
//                name: currentProduct.name,
//                inStock: currentProduct.inStock,
//                features: currentProduct.features,
//                description: currentProduct.description,
//                comments: currentProduct.comments
//            };
//            
//            sendProduct.comments.push(req.body);
//            
//            Product.update(query, sendProduct, function(err, result){
//                console.log(err);
//                if(err) {
//                    res.status(500).send(err);
//                } else {
//                    return res.json(result);
//                };
//            });
//              
//        });
 
    }, 
    
    queryProduct: function(req, res){
    
        var query = req.query;

        Product.find(query)
                .populate('comments')
                .exec(function(err, result){
                    if(err) {
                        return res.status(500).json(err);
                    } else {
                        return res.json(result);
                    }  
                });
    },
    
    findProdById: function(req, res){
        
        if(!req.params.id) {
            return res.status(400).send('id parameter needed');
        }
    
        var query = {};

        if(req.params.id){
            query._id = mongoose.Types.ObjectId(req.params.id);
        };

        Product.findOne(query, function(err, result){
                    if(err) {
                        return res.status(500).json(err);
                    } else {
                        return res.json(result);
                    }  
                });
        
    },
    
    updateProdById: function(req, res){

        if(!req.params.id) {
            return res.status(400).send('id parameter needed');
        }

        var query = {};
        
        if(req.params.id){
            query._id = mongoose.Types.ObjectId(req.params.id);
        }

        Product.update(query, req.body, function(err, result){
            if(err){
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
        });
    },
    
    deleteProdById: function(req, res){
    
        if(!req.params.id) {
            return res.status(400).send('id parameter needed');
        }

        var query = {};

        if(req.params.id){
            query._id = mongoose.Types.ObjectId(req.params.id);
        }

        Product.remove(query, function(err, result){
            if(err){
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
        });
    },
    
    deleteCommById: function(req, res){
    
        if(!req.params.productId) {
            return res.status(400).send('id parameter needed');
        }

        var query = {};

        if(req.params.productId){
            query._id = mongoose.Types.ObjectId(req.params.id);
        }
        
        var comment_id = mongoose.Types.ObjectId(req.params.commentId);

        Product.findByIdAndUpdate(query, {$pull: { 'comments': { _id : comment_id }}}, function(err, result){
            
            if(err){
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
            
        });
    }
    
    
};

