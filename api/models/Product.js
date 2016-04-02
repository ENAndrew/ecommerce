var mongoose = require('mongoose');

var Comment = require('./Comment').schema;

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
        type: [String]
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
    comments: [Comment] 
});

module.exports = mongoose.model('Products', ProductSchema);


