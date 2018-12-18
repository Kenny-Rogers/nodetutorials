//console.log('Hello world from Nodejs');

//link to a module
const tutorial = require('./tutorial');
console.log(tutorial);

//using the sum function from the imported module
console.log(tutorial(1,1));

//using the things from the imported module
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());