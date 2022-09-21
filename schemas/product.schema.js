const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(25);
const price = Joi.number().integer().min(10);
const caracteristicas = Joi.array();
const imageUrl = Joi.string();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    caracteristicas: caracteristicas.required(),
    imageUrl: imageUrl.required(),
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    imageUrl: imageUrl,
    caracteristicas: caracteristicas
});

const getProductSchema = Joi.object({
    id: id.required(),
})

module.exports = { createProductSchema,updateProductSchema, getProductSchema};