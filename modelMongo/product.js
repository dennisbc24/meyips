
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    caracteristicas: Array,
    imageUrl: String,
    category: String,
    })

const courseSchema = new Schema({
    name: String,
    price: Number,
    caracteristicas: Array,
    imageUrl: String,
    category: String,
    })

const Product = mongoose.model('items', productSchema);
const Course = mongoose.model('courses', courseSchema);

module.exports = {Product, Course}