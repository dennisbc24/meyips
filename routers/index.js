const express = require('express')
const homeRouter = require('./homeRouter')
const productsRouter = require('./productRouter');
const usersRouter = require('./userRouter');

function routerApi(app)

{
    const router = express.Router();
    app.set('views', './views');
    app.set('view engine', 'pug')
    app.use('/api/v1', router)
        router.use('/', homeRouter);
        router.use('/products', productsRouter);
        router.use('/users', usersRouter);
}

module.exports = routerApi;
