const http = require('http'); //It allows allows node_http.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
const server = http.createServer((req,res)=> {
    if (req.url === '/') {
        res.write('Hello world ');
        res.write("This is our first server");
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.write('This is a list of offerings');
        res.write(' at BTHS');
        res.end();
    }
});
server.listen(3000);
console.log("Listening on port 3000 ...");