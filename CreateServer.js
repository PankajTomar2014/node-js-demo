
const http = require("http")

const server = http.createServer(function(req ,resp) {
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write("<h1>server started</h1>")
    resp.end()

}).listen(1000,()=>console.log("server is running on http://localhost:1000/"))

