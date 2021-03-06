var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var about = require('./routes/about');
var searchByA = require('./routes/searchByA');
var resultByA = require('./routes/resultByA');

var searchByPop = require('./routes/searchByPop');
var resultByPop = require('./routes/resultByPop');

var allPokemon = require('./routes/allPokemon');
var allAthletes = require('./routes/allAthletes');

var guessgame = require('./routes/guessgame');
var matchgame = require('./routes/matchGame');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about', about);
app.use('/searchByA', searchByA);
app.use('/resultByA', resultByA);

app.use('/searchByPop', searchByPop);
app.use('/resultByPop', resultByPop);

app.use('/allPokemon', allPokemon);
app.use('/allAthletes', allAthletes);

app.use('/guessgame', guessgame);
app.use('/matchgame', matchgame);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
