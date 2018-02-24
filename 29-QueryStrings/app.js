var exoress = require('express');

var app = express();

app.get('/', function (req, res) {

    console.log(req.query);
})