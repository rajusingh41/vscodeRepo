var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
myReadStream.on('data', function (readData) {
    console.log('new data from file');
    console.log(readData);
});