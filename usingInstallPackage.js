//including an installed package
const _  = require('lodash');
//using a function from the installed package
let example = _.fill([1,2,3,4,5],"banana",1,4);
//displaying results
console.log(example);