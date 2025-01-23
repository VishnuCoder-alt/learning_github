const express = require("express");

const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors({
    // inside we can domains to allow cors of specific domains
})) // it is used to allow cross orgin sharing means when you are sending data from one server to another server it is not possible without cors

app.get("/",function(req,res){
    res.sendFile("/home/vishnu/Documents/week5_cors/public/index.html")
})
app.post("/sum", function(req, res) {
    
    const a = parseInt(req.body.a);// here string is coverted to int value
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);