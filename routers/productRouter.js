const express = require('express');
const router = express.Router();
const schemaHandler = require('../middlewares/schema.handler');

const {createProductSchema, getProductSchema, updateProductSchema} = require('../schemas/product.schema')

const Product =require('../modelMongo/product');
//con esto estamos trayendo la logica del servicio
const ProductService = require('../services/product.service');
const service = new ProductService();

/* router.get('/', async(req, res) => {
    const products = await service.find();
    res.json(products);
})
 */
//mongo
router.get('/', async(req, res) => {
  try {
    const arrayProductDB = await Product.find()
    res.json(arrayProductDB)
  } catch (err) {
    console.log(err);
  }
})

router.get('/:id', schemaHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (err) {
    next(err)
  }
}
);

router.get('/filter', (req,res) => {
    res.send('yo soy un filter');
  });

router.post('/'   , schemaHandler(createProductSchema, 'body'), async (req, res, next) => {
  try {
    const arrayProductDB = await Product.create(req.body);
    res.json(arrayProductDB);
  } catch(e){
    next(e)
  }
  
}
)

router.patch('/:id', 
schemaHandler(getProductSchema, 'params'),
schemaHandler(updateProductSchema, 'body'),
async (req, res) => {
  try {
      const { id } =req.params;
      const body = req.body;
      const product = await Product.findByIdAndUpdate(id, body);
      res.json({
        message: `producto con el ID: ${id} se actualizo con éxito`
      })
  }catch(error) {
      res.status(400).json({
      message: error.message
    })
  }
    
  })

router.delete('/:id',schemaHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndRemove(id);

    res.json(id)
    
  } catch(e){
    next(e)
  }
  
});



module.exports = router;