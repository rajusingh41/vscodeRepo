var express = require('express');
var app = express();


app.get('/', function (req, res) {

    res.send('hello message');
});

app.get('/profile/:id', function (req, res) {
    res.send('you requested to see a product with the id of : ' + req.params.id);
});


app.listen(3006);

console.log('Open http://localhost:3006');