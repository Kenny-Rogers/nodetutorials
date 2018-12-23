//including express module
const express = require('express');
//creating an instance of the express router
const route = express.Router();

//adding a middleware to route
route.use((resquest,response,next)=>{
    console.log('people middleware being used');
    next();
});

//setting up a route
route.get('/',(request, response)=>{
    response.send('/ being hit');
});

route.get('/example', (request, response) => {
    response.send('/example being hit');
});

//making this route global for use by other files
module.exports = route;