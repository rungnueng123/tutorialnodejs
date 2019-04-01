var express = require("express");
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './public');

app.get('/', (req, res) => {
    res.render('index2', {
        header: 'tutorialNodejs',
        description: 'Our Platform',
        courses: ['Android', 'IOS', 'NodeJS']
    })
})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});