var express = require("express");
var app = express();

//root path
app.get('/', function(req,res){
    res.end('default');
});

app.get('/add',(req,res)=>{
    res.end('/api/add');
});

//url มี b หรือไม่มีก็ได้
app.get('/ab?cd',(req,res)=>{
    res.end('/ab?cd');
});

//ต้องมี 1 อย่างน้อย 1 ตัว
app.get('/x1+cd',(req,res)=>{
    res.end('/x1+cd');
});

//ต้องมีขั้นตรง * อย่างน้อย 1 ตัว
app.get('/ab*cd',(req,res)=>{
    res.end('/ab*cd');
});



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});