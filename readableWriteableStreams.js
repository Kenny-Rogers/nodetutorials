//allows us to read and write data in chunks which cause efficiency

//import the fs module
const fs = require('fs');
//importing zlib module that is used to compress files
const zlib = require('zlib');

//create a readable stream
const readstream = fs.createReadStream('./lorem.txt','utf8');
const compressedReadStream = fs.createReadStream('./example2.txt.gz');

//create a writeable stream
const writestream = fs.createWriteStream('example2.txt');
const writestream1 = fs.createWriteStream('uncompressed.txt');
const compressedWriteStream = fs.createWriteStream('example2.txt.gz');

//listen for event
readstream.on('data',(chunk)=>{
    writestream.write(chunk);
});

//using pipes to read a stream and write stream to a file
readstream.pipe(writestream);

//creating a transform stream that takes in a stream and 
//performs a transformation on that stream
const gzip = zlib.createGzip();
const unzip = zlib.createUnzip();
//compressing the data from the readstream to a compressed file
readstream.pipe(gzip).pipe(compressedWriteStream);
//uncompressing a file 
compressedReadStream.pipe(unzip).pipe(writestream1);
