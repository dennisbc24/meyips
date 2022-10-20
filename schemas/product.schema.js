const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(100);
const price = Joi.number().integer().min(10);
const category = Joi.string();
const caracteristicas = Joi.array();
const imageUrl = Joi.string();

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    caracteristicas: caracteristicas.required(),
    imageUrl: imageUrl.required(),
    category: category.required(),
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    imageUrl: imageUrl,
    caracteristicas: caracteristicas,
    category: category,
});

const getProductSchema = Joi.object({
    id: id.required(),
})

module.exports = { createProductSchema,updateProductSchema, getProductSchema};
