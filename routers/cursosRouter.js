const express = require('express');
const router = express.Router();

const {uploadFile, getFile, deleteFile, uploadCourse} = require('../helpers/aws')

//modulo para eliminar archivos de backend
const { unlink } = require('fs-extra')
const path = require('path');

const schemaHandler = require('../middlewares/schema.handler');

const {createProductSchema, getProductSchema, updateProductSchema} = require('../schemas/product.schema')

const {Course} = require('../modelMongo/product');
//con esto estamos trayendo la logica del servicio
//const ProductService = require('../services/product.service');
const { log } = require('console');
//const service = new ProductService();


router.get('/', async(req, res) => {
    try {
      const arrayProductDB = await Course.find()
      res.json(arrayProductDB)
    } catch (err) {
      console.log(err);
    }
  })

module.exports = router;