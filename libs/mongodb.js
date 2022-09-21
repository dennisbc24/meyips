const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    age: Number,
    city: String,
});



const model = mongoose.model('Message', mySchema);

module.exports = model;