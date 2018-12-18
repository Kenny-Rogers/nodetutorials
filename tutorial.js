const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}

//to expose the function for  other files to use
module.exports = sum;

//to expose all the things in this file for use by other files
//Method 1
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

//Method 2
module.exports = {sum:sum, PI:PI, SomeMathObject:SomeMathObject}

