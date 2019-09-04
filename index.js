//req.query
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route'); 
var authRoute = require('./routes/auth.route');

var port = 3000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.get('/', function(req, res) {
    res.render('main', {
        name: "Coders"
    })
});

app.use(express.static('public'));

app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, function() {
    console.log('Server start at port '+ port);
});
