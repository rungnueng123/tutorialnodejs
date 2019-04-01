var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.end("Hi! Express");
});

app.get('/profile',function(req,res){
    res.end("profile");
});

app.get('/login',function(req,res){
    res.end("login");
});

app.post('/profile', function(req, res){
    res.json({result : 'post success'});
})

app.delete('/profile', function(req, res){
    res.json({result : 'delete success'});
})

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});