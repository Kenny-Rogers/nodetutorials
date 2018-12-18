//importing readline module
const readline = require('readline');

//creating an interface to use readline module
const readlineInt = readline.createInterface({input:process.stdin, 
                        output:process.stdout});

//generation random numbers 
let  num1 = Math.floor((Math.random() * 10) + 1); 
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

//requesting user input
readlineInt.question(`what is ${num1} + ${num2}? \n`, (userInput)=>{
    if(userInput.trim() == answer){
        //close the interface that accepts user input
        readlineInt.close();
        console.log(userInput);
    } else {
        //reprompt user for inputs
        readlineInt.setPrompt('Incorrect response, try again\n');
        readlineInt.prompt();
        readlineInt.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                readlineInt.close();
            } else {
                readlineInt.setPrompt(`Wrong answer, try again \n`);
                readlineInt.prompt();
            }
        });
    }
});

//displaying results on close event
readlineInt.on('close',()=>{
    console.log('Correct!!!!');
});