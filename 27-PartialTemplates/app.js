var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/profile/:name', function (req, res) {
    res.render('profile', { name: req.params.name });
});


app.listen(3008);

console.log('Open http://localhost:3008');