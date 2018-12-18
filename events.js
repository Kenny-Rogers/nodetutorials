//How to handle events

//requiring the event module in this file
const EventEmitter = require('events');
//creating an object from the class
const eventEmitter = new EventEmitter();

//adding an eventlistener
eventEmitter.on('tutorial', (num1, num2)=>{
    console.log('tutorial event has occurred '+ (num1+num2));
});

//emitting a tutorial event
eventEmitter.emit('tutorial',1,2);

//creating a custom object that makes use of events
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

//creating an object of class
let pedro = new Person('Pedro');
let chris = new Person('Chris');

//adding a listener to object
pedro.on('name', ()=>{
    console.log('my name is '+ pedro.name);
});
chris.on('name',()=>{
    console.log('my name is '+ chris.name);
});

//emitting the name event
pedro.emit('name');
chris.emit('name');