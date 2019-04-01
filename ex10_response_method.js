var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'/public')))

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '/public/image/emma.jpg'));//prompt a file to be download
});

// แสดงค่าเฉยๆ ไม่ได้หยุด process
app.get('/send', (req, res) => {
    res.send('Welcome, I just call send');
});

// end process
app.get('/end', (req, res) => {
    res.write('Hi, ');
    res.write('How, ');
    res.write('Are, ');
    res.write('You, ');
    res.end();
});

app.get('/json', (req, res) => {
    var data = {result: 'ok', msg: 'test'};
    res.json(data);
});

app.get('/redirect',(req,res)=>{
    res.redirect('/json');
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
})




var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});