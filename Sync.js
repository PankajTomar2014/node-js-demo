
// Sync function => readFileSync() => this don wait for response,==>
//    <==it'll wait  to get the response,otherwise it'll not be executed,so it'll wait.
// Sync function will use with try and catch block.


// Async function => readFile() => this don't wait for response,==>
//    <==if it get the data firstly of other ,it'll be executed,it'll not wait.

const fileSyetem = require('fs')

   try {
       const data= fileSyetem.readFileSync(__dirname+"/MyData.txt","utf8")// for read file
            console.log(data)
        } 
    catch (error)
        {
        console.log("error=-=->>>",error)
        }

console.log("I am the best devepoler?")


