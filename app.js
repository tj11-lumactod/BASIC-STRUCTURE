var age = 15;
var pi = 3.1416;
var date = new Date();
var computeAREA = function(l,w){
return l * w;    
}
var name = "John Joseph Cero";

console.log('Age:' + age);
console.log('PI:' + pi.toFixed(2));
console.log(date);
console.log(name);
console.log(computeAREA(10,60));

var x = 1;
var y = null;
var waladiha=undefined;
if(x)
console.log('x is true');

if(!y)
console.log('y is false');

if(!waladiha)
console.log('wla diha is undefined');

var jsonObject = {
    name: 'TJ',
    lastname:'Lumactod',
    address: 'Tubigon',   
};
console.log(jsonObject.name);
console.log(jsonObject.lastname);
console.log(jsonObject.address);
console.log(jsonObject);