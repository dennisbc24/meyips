const express = require('express')
const homeRouter = require('./homeRouter')
const postRouter = require('./postRouter')
const productsRouter = require('./productRouter');
const usersRouter = require('./userRouter');
const publicPath = __dirname.replace('routers', 'dennis');
function routerApi(app)

{
		const router = express.Router();
    app.set('views', `${publicPath}/templates`);
    app.set('view engine', 'pug')
    app.use(express.static(publicPath))
    console.log(`${publicPath}/templates`);
		app.use('/', homeRouter)
		app.use('/api/v1', router)
				router.use('/', homeRouter);
				router.use('/post', postRouter);
				router.use('/products', productsRouter);
				router.use('/users', usersRouter);
}

module.exports = routerApi;
