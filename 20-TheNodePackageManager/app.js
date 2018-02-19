var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello raju');

});

app.listen(3005);

console.log('Open http://localhost:3005');