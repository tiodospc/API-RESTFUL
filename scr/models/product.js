const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    type: String,
    cliente: String,
    tentant: Number
    
});

module.exports = mongoose.model('Product', ProductSchema);