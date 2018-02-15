var http = require('http');
var fs = require('fs');

// // using pipe for write file on dir

// var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeFileWithPip.txt');

// myReadStream.pipe(myWriteStream);

// // end using pipe 

var server = http.createServer(function (req, res) {
    console.log('request url : ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3001, '127.0.0.1');
console.log('open http://localhost:3000/');