
var counter =function(arr){
    return 'There are ' +arr.length+' element in array';
};

var add=function(a,b)
{
    return `sum of the two number is ${a+b}`;
};

var pi =3.142;

// module.exports.counter=counter;
// module.exports.add=add;
// module.exports.pi=pi;

module.exports={
    counter:counter,
    add:add,
    pi:pi
}