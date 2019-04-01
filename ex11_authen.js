var express = require("express");
var app = express();

const session = require('express-session');
app.use(session({
    secret: 'tutorialNadejs',
    cookie: {
        maxAge: 60000000
    },
    resave: true,
    saveUninitialized: false
}));

app.get('/login', (req, res) => {
    const _username = req.query.username;
    const _password = req.query.password;

    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.redirect('/profile');
    }

    if (req.query.username == 'admin' && req.query.password == 'password') {
        req.session.username = req.query.username;
        req.session.isLoggedIn = true;
        res.redirect('/profile');
    } else {
        res.send('Invalid username and password');
    }
});

app.get('/profile', (req, res) => {
    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.end('Profile of: ' + req.session.username);
    } else {
        res.redirect('/login');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.get('/',(req,res)=>{
    if (req.session.isLoggedIn != null && req.session.isLoggedIn == true) {
        res.redirect('/profile');
    }else{
        res.redirect('/login');
    }
})




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});