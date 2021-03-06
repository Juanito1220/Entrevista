const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const methodOverride = require('method-override');



var app = express();

app.set('views', (path.join(__dirname, './views')));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
 
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
