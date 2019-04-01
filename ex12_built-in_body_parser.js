var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//ยิงแบบตัวแปร
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

//ยิงแบบ json
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    res.write('username: ' + req.body.username);
    res.write(', password: ' + req.body.password);
    res.end();
})




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});