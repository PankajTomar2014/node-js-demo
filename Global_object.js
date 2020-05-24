 // __filename:current File Name with path
 // __dirname:current Folder Name with path
 // require: require means import the file from out of the current file or folder
 // console : console.log()
 // buffer
 // module:import name from main.js file =->>
 // export:import name from main.js file =->>

const importMainFile = require('./main')
console.log("Import name from main.js file =->>",importMainFile.MyName)
console.log("current File Name with path =->>",__filename)
console.log("current Folder Name with path =->>",__dirname)
