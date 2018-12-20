//including express module
const express = require('express');
//including path module
const path = require('path');
//including the bodyParser module that allows us to access form data
const bodyParser = require('body-parser');
//including JOI module that allows for form validation
const joi = require('joi');

//app object is created by express and contains methods that can be used
const app = express();

/*MIDDLEWARE: is the code the code that gets executed between the user request and
the server e.g  app.use(bodyParser.json()) 
bodyParser is a middleware*/

//using a middleware that creates an alias for our static files
app.use('/public',express.static(path.join(__dirname,'static')));
//using a middleware to allow parsing of urlencoded forms
app.use(bodyParser.urlencoded({extended:false}));
//using a middleware to allow parsing of JSON
app.use(bodyParser.json());
//setting the view templating engine to be used
app.set('view engine','ejs');

//creating a custom middleware 
//this middleware works for all routes
app.use((request,response,next)=>{
    console.log(request.url,request.method);
    //next indicates that the current process is done
    next()
});

//creating a custom middleware for a specific route "middleware"
app.use('/middleware',(request, response, next) => {
    console.log("middleware route");
    //middleware can modify request
    request.newProp = "new user";
    //next indicates that the current process is done
    next()
});

app.get('/middleware', (request,response)=>{
    console.log(request.newProp);
});

//creating get request for ejs 
app.get('/ejs/:userQuery',(request,response)=>{
    //displays the file /views/index.ejs with userQuery data
    response.render('index',{data:{userQuery:request.params.userQuery,
                                    searchResults:['book1', 'book2', 'book3'],
                                    loggedIn:false,
                                    username:'kenny'}});
});

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
// app.post('/',(request, response)=>{
//     console.log(request.body);
//     //database work here
//     response.send('successfully posted data');
// });

//handling a json POST request
// app.post('/', (request, response) => {
//     console.log(request.body);
//     //database work here
//     response.json({success:true});
// });

//handling POST request and validating inputs with JOI
app.post('/',(request, response)=>{
    console.log(request.body);
    //validating input data using a scheme[Rules data must follow]
    //creating a scheme
    const schema = joi.object().keys({
        //email rule:must be a string, email and can't be null
        email : joi.string().trim().email().required(),
        //password rule:must be a string of min lenght 5, max length 5 and can't be null
        password : joi.string().min(5).max(10).required()
    });
    //using the scheme to validate data
    joi.validate(request.body, schema, (err, result)=>{
        if(err){
            console.log(err);
            response.send('an error has occured');
        }else{
            console.log(result);
            response.send('successfully posted data');
        }

    });
    //response.send('successfully posted data');
});

//setting up a port to listen for request on
app.listen(3000);