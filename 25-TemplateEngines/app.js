var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');

});

app.get('/contact', function (req, res) {
    res.sendfile(__dirname + '/contact.html');
});


app.get('/profile/:name', function (req, res) {

    res.render('profile', { names: req.params.name });
})



app.listen(3007);

console.log('Open http://localhost:3007');