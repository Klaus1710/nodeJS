const http = require('http')
const fs = require('fs')

const homefile = fs.readFileSync("./index.html");

const server = http.createServer((req, res)=>{
    if(req.url === "/") res.end(homefile);
    else if(req.url === "/about") res.end("<H1>About Page</H1>");
    else if(req.url === "/contact") res.end("<H1>Contact Page</H1>");
    else if(req.url === "/service") res.end("<H1>Service Page</H1>");
    else res.end("<H1>404 NOT FOUND</H1>");
});



server.listen(3443, "localhost", ()=>{
    console.log("Server is running on port http://localhost:3443");
})