var mongoose = require('mongoose');

var Product = require('./Product');

var CommentSchema = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: { 
        type: String,
        required: true
    },
    comment: { 
        type: String,
        required: true
    }
},
{
    timestamps: true
});

//module.exports = mongoose.Schema('Comments', CommentSchema);

module.exports = CommentSchema;


