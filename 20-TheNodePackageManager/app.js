var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello raju Singh');

});

app.listen(3005);

console.log('Open http://localhost:3005');