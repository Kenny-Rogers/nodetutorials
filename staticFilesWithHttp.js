//include http module
const http = require('http');

//include filesystem module
const fs = require('fs');

//creating the http server
http.createServer((request,response)=>{
    //reading html file
    const readStream = fs.createReadStream('./static/example.json');
    //adding a header to indicate the kind of response sent
    response.writeHead(200,{'Content-type':'application/json'});
    readStream.pipe(response);
}).listen(3000);