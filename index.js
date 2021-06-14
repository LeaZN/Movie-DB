var express = require("express");

var app = express();



app.get("/", (req, res)=> {
    res.send("ok");
});
app.get("/test", (req, res)=> {
    res.send("status:200, message:ok");
});


var today = new Date();
var Time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
app.get('/time', (req, res) => {

    res.send({
        status: 200,
        message: Time
    })
});






app.listen(3000);