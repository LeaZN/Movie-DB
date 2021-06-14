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





app.get('/hello/:id', (req, res) => {
    var id = req.params.id;
    if (id !== undefined) {
        res.send({
            status: 200,
            message: "Hello," + id
        })
    }
    else {
        res.send({
            status: 200,
            message: "Hello,"
        })
    }

})
;





app.get('/search', (req, res) => {
    var search = req.query.s;
    if (search !== undefined) {
        res.send({
            status:200, 
            message:"ok", 
            data: search
        })
    }
    else {
        res.send({
            status:500, 
            error:true, 
            message:"you have to provide a search"
        })
    }

})
;









app.listen(3000);