var express = require("express");
var app = express();

//check login first
app.all('/secure/*', function (req, res, next) {
    console.log('Accessing the secret section');

    if (req.query.username == 'admin') {
        next();
    } else {
        res.end('You need to login first!\n');
    }
})

app.get('/', function (req, res) {
    res.end('Home Page');
});

app.get('/secure/profile', function (req, res) {
    res.end('Profile Page');
});

app.get('/secure/inbox', function (req, res) {
    res.end('Inbox Page');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});