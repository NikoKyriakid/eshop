const express = require('express');
//const throwError = require('http-errors');
const path = require('path');
const indexRouter = require('./routes/index');
const listRouter = require('./routes/list');

const app = express();
const port = process.env.PORT || 3000;

//app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/list', listRouter);

app.listen(port, () => console.log(`Live on port ${port}`));