var mongoose = require('mongoose');
var Product = require('../models/Product');

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
        
        var query = {};
        
        query._id = req.params.productId;

        var commentId = req.params.commentId;

        Product.findByIdAndUpdate(query, {
            $pull: { 
                comments: { _id : commentId }
            }
        }, function(err, result){ 
            if(err){
                return res.status(500).json(err);
            } else {
                return res.json(result);
            }
        });
    }

};

