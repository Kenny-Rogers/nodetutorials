//including the http module
const http = require('http');

//creating a http server
const server = http.createServer((request, response)=>{
    //checking if the request route was to the root
    if(request.url === '/'){
        //writing the response 
        response.write('Hello world from nodejs');
        //sending the response
        response.end();
    } else {
        //if the request route is to anything other than the root
        response.write('using some other domain');
        response.end();
    }
});

//port to listen for resquest on
server.listen('3000');