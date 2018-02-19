var http = require('http');
var fs = require('fs');
var port = 3004;

var server = http.createServer(function (req, res) {

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Contant-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    }
    if (req.url === '/contact') {
        res.writeHead(200, { 'Contant-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
    }
    if (req.url === '/account') {
        res.writeHead(200, { 'Contant-Type': 'text/html' });
        fs.createReadStream(__dirname + '/account.html', 'utf8').pipe(res);
    }
});


server.listen(port);