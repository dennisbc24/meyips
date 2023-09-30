const express = require('express')
const ejs = require('ejs')
const homeRouter = require('./homeRouter')
const postRouter = require('./postRouter')
const post_cursos = require('./post_courses_Router')
const productsRouter = require('./productRouter');
const usersRouter = require('./userRouter');
const coursesRouter = require('./cursosRouter');
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
		app.use('/api/v1', router)
		//frontend home
				router.use('/', homeRouter);
		//subir elementos al servidor
				router.use('/post', postRouter);
				router.use('/post_cursos', post_cursos);
		//API para devolver JSONs
				router.use('/products', productsRouter);
				router.use('/users', usersRouter);
				router.use('/courses', coursesRouter);
}
module.exports = routerApi;
