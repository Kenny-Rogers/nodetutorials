//import the filesystem module
const fs = require('fs');

//creating a file
fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File successfully created\n');
        //reading from a file
        fs.readFile('example.txt', 'utf8', (err,file)=>{
            if(err){
                console.log(err);
            }else{
                console.log(file);
            }
        })
    }
});

//to rename a file
fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else    
        console.log('successfully renamed');
});

//to append data to a file
fs.appendFile('example2.txt', '\nSome data appended', (err)=>{
    if(err)
        console.log(err);
    else
        console.log('appended data successfully');
});

//to delete a file
fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('file deleted successfully');
});