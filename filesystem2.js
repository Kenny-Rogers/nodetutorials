//importing filesystem module 
const fs = require('fs');

//creating a folder
fs.mkdir('tutorial',function(err){
    if(err){
        console.log(err);
    } else {
        console.log('folder successfully created');
        fs.writeFile('./tutorial/example.txt', 'data in file', (err)=>{
            if(err)
                console.log(err);
            else    
                console.log('successfully created file');
        });

        //deleting a folder
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err);
            else 
                console.log('successfully deleted');
        })
    }
});

//deleting a folder with files in it
fs.readdir('./tutorial',(err, files)=>{
    if(err)
        console.log(err);
    else {
        //delete files in folder
        for(let file of files){
          fs.unlink('./tutorial/'+file,(err)=>{
            if(err)
              console.log(err);
            else
              console.log('successfully deleted files');
          });
        }

        //delete folder
        fs.rmdir('./tutorial', (err)=>{
          if(err)
            console.log(err);
          else
            console.log('Successfully deleted folder');
        });
    }
});