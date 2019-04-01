var http = require('http');
http.createServer(function (req, res) {
    res.end('Hi!');
}).listen(3000)
console.log('server is running');