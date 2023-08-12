const http = require('http');
const port = 8000;
const fs= require('fs');
const server = http.createServer(function(req,res){//or we can define function
    console.log(req.url);//url will print in terminal
   // res.writeHead(200,{'content-type':'text/html'}); 
    
    let filePath;

    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        default:
            filePath = './404.html'    
    }

    fs.readFile(filePath, function(err,data){
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
   
    // fs.readFile('./index.html',function(err,data){
    //     if(err){
    //         console.log('error',err);
    //         res.end('<h1>ERROR!<h1/>');    
    //     }
    //     res.end(data);//in web browser 
    // }) 
    
});

server.listen(port,function(err){
    if(err){
        console.log(err);
        return ;
    }

    console.log("Server is up and running on port : ",port);

});