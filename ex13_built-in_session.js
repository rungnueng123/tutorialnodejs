var express = require("express");
var app = express();
var session = require('express-session');
app.use(session({
    secret: 'tutorialNadejs',
    cookie: {
        maxAge: 60000000
    },
    resave: true,
    saveUninitialized: false
}));

app.get('/count', (req, res) => {
    if (req.session.count == null) {
        req.session.count = 0;
    }

    req.session.count = req.session.count + 1;
    // res.send('Count: ' + req.session.count);

    res.setHeader('Content-type','text/html');
    res.write(`<b><font color='#FF0000'>Reset ${req.session.count}</font></b>`)
    res.end();

})

app.get('/reset', (req, res) => {
    req.session.destroy();
    res.redirect('/count');
    // req.session.count = 0;
    // res.send('Count: ' + req.session.count);

})




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});