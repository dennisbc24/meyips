
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    caracteristicas: Array,
    imageUrl: String,
    })

const Product = mongoose.model('products', productSchema);

module.exports = Product;