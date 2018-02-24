var express = require('express');

var bodyParser = require('body-parser');

var app = express();

// creat application/josn parser

var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});



app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');
})

app.get('/contactus', function (req, res) {
    res.sendfile(__dirname + '/contactus.html');
})

app.post('/contactus', urlencodedParser, function (req, res) {

    console.log(req.body);
    // if (!req.body)
    //     return res.sendStatus(400);
    // res.send('welcome ,' + req.body);
})



app.listen(3010);
console.log('Open http://localhost:3010');