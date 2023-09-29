const express = require('express')
const ejs = require('ejs')
const homeRouter = require('./homeRouter')
const roperosRouter = require('./roperosRouter')
const cocinaRouter = require('./cocinaRouter')
const postRouter = require('./postRouter')
const post_cursos = require('./post_courses_Router')
const productsRouter = require('./productRouter');
const usersRouter = require('./userRouter');
const publicPath = __dirname.replace('routers', 'dennis');
function routerApi(app)

{
		const router = express.Router();
    app.set('views', `${publicPath}/templates`);
	app.engine('html', require('ejs').renderFile)
	app.set('view engine', 'html')
    //app.set('view engine', 'pug')
    app.use(express.static(publicPath))
    console.log(`${publicPath}/templates`);
		app.use('/', homeRouter)
		app.use('/roperos', roperosRouter)
		app.use('/cocina', cocinaRouter)
		app.use('/api/v1', router)
				router.use('/', homeRouter);
				router.use('/post', postRouter);
				router.use('/post_cursos', post_cursos);
				router.use('/products', productsRouter);
				router.use('/users', usersRouter);
}

module.exports = routerApi;
