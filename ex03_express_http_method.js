var express = require("express");
var bodyParser = require('body-parser')
var app = express();

//import body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));

//standard
app.get('/', function (req, res) {
    res.end('welcome');
});

//lambada
app.get('/profile', (req, res) => {
    res.end('profile');
});

app.get('/login', (req, res) => {
    res.end('get username: ' + req.query.username + ' password: ' + req.query.password);
});

app.post('/post', function (req, res) {
    res.end('post username: ' + req.body.username + ' password: ' + req.body.password);
});

app.put('/post', function (req, res) {
    res.end('put username: ' + req.body.username + ' password: ' + req.body.password);
});

app.delete('/post', function (req, res) {
    res.end('delete username: ' + req.body.username + ' password: ' + req.body.password);
});

//HTTP Method (GET/POST/PUT/DELETE)

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});