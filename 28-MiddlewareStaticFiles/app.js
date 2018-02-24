var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('assets', express.static('assets'));

app.get('/', function (req, res) {

    res.render('index');
});

app.get('/contact', function (req, res) {
    res.render('contact');
});

app.listen(3009);

console.log('Open http://localhost:3009');