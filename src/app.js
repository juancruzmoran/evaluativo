require('dotenv').config();
const express = require('express');
const path = require('path');

/* const indexRouter = require('./routes/index'); */

const usersRoutes = require('./routes/userRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

/* app.use('/', indexRouter); */
app.use('/users',usersRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
