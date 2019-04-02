var express = require("express");
var formidable = require('formidable');
var path = require('path');
var app = express();
var fs = require('fs');
app.use(express.static('upload'));


app.post('/upload', (req, res) => {
    var form = new formidable.IncomingForm();
    var date = Date.now();
    form.parse(req,function(err, fields, files){
        console.log(JSON.stringify(files));

        var oldpath = files.filetoupload.path;

        //เวลา + รูปชื่อเดิม
        // var newpath = path.join(__dirname,"./upload/"+date+"-"+files.filetoupload.name);

        //เวลา + นามสกุลเดิม
        var newpath = path.join(__dirname,"./upload/"+date+"-"+files.filetoupload.name.split('.').pop());
        fs.rename(oldpath,newpath);
        
        res.send(JSON.stringify(files))
    });
})


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listen", host, port);
});