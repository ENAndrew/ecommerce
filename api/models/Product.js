var mongoose = require('mongoose');

var Comment = require('./Comment');

var ProductSchema = new mongoose.Schema({
    name: { 
        type: String,
        unique: true,
        index: true,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    },
    features: {
        type: String
    },
    quantity: {
        type: Number
    }, 
    price: {
        type: Number
    },
    inStock: {
        type: Boolean
    },
    photoSrc: {
        type: String
    },
    comments: [Comment] 
});

module.exports = mongoose.model('Products', ProductSchema);


