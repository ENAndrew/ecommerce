var mongoose = require('mongoose');

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

module.exports = mongoose.model('Comments', CommentSchema);


