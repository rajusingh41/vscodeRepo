var events =require('events');

// // create custome events 

// var myEmitter = new events.EventEmitter();

// // myEmitter.on('someEvent', function(){
// //    console.log('hi');
// // });

// myEmitter.on('someEvent', function(msg){
//        console.log(msg);
//     });

// myEmitter.emit('someEvent','hey raju');

var util=require('util');

var Person=function(name){
    this.name=name;
};

util.inherits(Person,events.EventEmitter);

var raju=new Person('raju');
var rahul = new Person('rahul');

var pepole = [raju,rahul];

pepole.forEach(function(person){
    person.on('eventName',function(msg){
        console.log(person.name +' Says : '+ msg);
    });
}) ;


raju.emit('eventName','hello');
rahul.emit('eventName','god by');
