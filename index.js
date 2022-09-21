const express = require('express');
//libreria para subir archivos
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3000;

const {logError,errorHandler, errorBoomHandler} = require('./middlewares/error.handler')

//aqui se ejecuta todos los routers
const routerApi = require('./routers');

//este middleware sirve para que la respuesta del post sea con la data mas
app.use(express.json());

/* const whitelist = ['http://127.0.0.1:5555', 'http://127.0.0.1:5500', 'http://maxicusco.net', 'http://127.0.0.1'];
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
} */

app.use(cors());

//esto es para que la imagen subida quede con su nombre de origen
const storage = multer.diskStorage({
    destination: 'src/public/images',
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

app.use(multer({
    storage: storage,
    dest: 'src/public/images'
}).single('foto'));

routerApi(app);

app.use(logError);
app.use(errorBoomHandler);
app.use(errorHandler);

const mongoose = require('mongoose');

const user = 'dennis_prueba';
const password = 'xEYFUZVdPUqXvBMG';
const dbname = 'prouctos';
const uri = `mongodb+srv://${user}:${password}@cursoplatzi.yir1r.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('Base de datos conectada'))
    .catch(e => console.log(e))

//con esto escuchamos el puerto 3000
app.listen(port, () => {
    console.log('Mi port ' + port);
});




