let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let session = require('express-session');
let mongoose = require('mongoose');

let indexRouter = require('./routes/index');

// Connection mongoDB
mongoose.connect('mongodb://localhost/groupool')
  .then(() => console.log('Connected to mongo!'))
  .catch(() => console.log('Problem connecting with mongo...'));

let app = express();

// Session control
let passport = require('./config/passport-config'); // passport module setup and initial load
let passportStrategySetup = require('./config/passport-local-strategy');
app.use(session({
  secret: 'groupool will be cool',
  resave: true,
  saveUninitialized: true
}));
passport.use(passportStrategySetup);
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
