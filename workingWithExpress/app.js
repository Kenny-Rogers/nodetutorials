//including express module
const express = require('express');
//including path module
const path = require('path');

//app object is created by express and contains methods that can be used
const app = express();

//

//creating get request for the home or index page
app.get('/',(request, response)=>{
    response.send('Hello World');
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

//setting up a port to listen for request on
app.listen(3000);