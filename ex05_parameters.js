var express = require("express");
var app = express();

app.get('/post/:username/:password', function (req, res) {
    res.json({
        username: req.params.username,
        password: req.params.password
    });
});

app.get('/post/username/:username/password/:password', function (req, res) {
    res.json({
        username: req.params.username,
        password: req.params.password
    });
});

app.get('/travel/:from-:to', function (req, res) {
    res.json({
        from: req.params.from,
        to: req.params.to
    })
})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});