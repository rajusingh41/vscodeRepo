var fs=require('fs');

// sync call

// var readfile= fs.readFileSync('readme.txt','utf8');

// console.log(readfile);

// fs.writeFileSync('writeMe.txt',readfile);
// fs.writeFileSync('writeMe1.txt');
// fs.writeFileSync('writeMe1.txt','hello dude');

// async call

 fs.readFile('readme.txt','utf8',function(err,data){
     console.log(data);

     fs.writeFile('asyncFile.txt',data);
 })

 console.log('before reading file');


 // remove file

 fs.unlink('writeMe1.txt');