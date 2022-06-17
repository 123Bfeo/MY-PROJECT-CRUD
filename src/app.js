const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routerCliente = require('./router/cliente.routes');
const methodOverride = require('method-override');

const app = express();
//static file
app.use(express.static(path.join(__dirname, 'public')));

//settings
//configuracion de la plantilla ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

//use router
app.use('/', routerCliente)

//server corriendo
app.listen(3030, () => {
    console.log('Server on port 3030')
})