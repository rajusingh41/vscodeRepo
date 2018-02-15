 var fs = require('fs');


// // Sync call

 //fs.mkdirSync('stuff');

 //fs.rmdirSync('stuff');

 //// async call 

 fs.mkdir('public',function(){
     console.log('hi');
 })