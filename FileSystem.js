// fs is stand for fileSyetem,it use when we want to -->
// <-- readFile,deleteFile etc from outside the current file,in whice we are working.

const fileSyetem = require('fs')
const http = require("http")
const server = http.createServer(function(req ,resp) {
fileSyetem.readFile(__dirname+"/MyData.txt","utf8",(error,data)=>{ // for read file
    if(error) throw error;
    resp.writeHead(200,{"content-type":"text/plain"})
    resp.write(data)       //for show data of readFile on server
    resp.end()
});
}).listen(1000,()=>console.log("server is running on http://localhost:1000/"))

// fileSyetem.unlink(__dirname+"/MyData.txt",(error,data)=>{  // for delete file
//     if(error) throw error;
//     console.log("file deleted-=>",data)
// })