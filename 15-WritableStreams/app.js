var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/myWritedFile.txt');

myReadStream.on('data', function (chunkOfData) {

    console.log('File Readed and Writing now');
    myWriteStream.write(chunkOfData);
});