//including express module
const express = require('express');
//including path module
const path = require('path');
//including the bodyParser module that allows us to access form data
const bodyParser = require('body-parser');

//app object is created by express and contains methods that can be used
const app = express();

//using a middleware that creates an alias for our static files
app.use('/public',express.static(path.join(__dirname,'static')));
//using a middleware to allow parsing of urlencoded forms
app.use(bodyParser.urlencoded({extended:false}));

//creating get request for the home or index page
app.get('/',(request, response)=>{
    //response.send('Hello World');
    response.sendFile(path.join(__dirname,'static','index.html'));
});

//creating a route with url parameters
app.get('/example/:name/:age',(request,response)=>{
    //getting url parameters [MANDATORY PARAMETERS]
    console.log(request.params);
    //getting url query [OPTIONAL PARAMETERS]
    console.log(request.query);
    //sending response
    response.send("Username is "+ request.params.name + 
                    "\nAge is "+ request.params['age']);
});

//handling POST request
app.post('/',(request, response)=>{
    console.log(request.body);
    //database work here
    response.send('successfully posted data');
});

//setting up a port to listen for request on
app.listen(3000);