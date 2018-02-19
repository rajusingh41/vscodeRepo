var http = require('http');
var fs = require('fs');

var port = 3003;

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myJson = {
        name: 'Raju',
        age: '30',
        mobile: 9555942461
    };
    res.end(JSON.stringify(myJson));
})


server.listen(port);

