const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

mongoose.connect("mongodb+srv://Honey:f8zic9GUVGOmeNRL@cluster2.tksstvk.mongodb.net/eventManagement", {useNewUrlParser: true}, {useUnifiedTopology: true});

const notesSchema = (
    {
        dates: String,
        times: String,
        club: String,
        event: String,
        description: String
    }
)

const Conn = mongoose.model("Conn", notesSchema);

app.get("/", function(req,res){
//   res.send("express is working")
res.sendFile(__dirname + "/form.html");
})

app.post("/submit-form", function(req, res){
    let newConn = new Conn({
        dates: req.body.dates,
        times: req.body.times,
        club: req.body.club,
        event: req.body.event,
        description: req.body.description
    });
    console.log(req.body);
    newConn.save();
    res.redirect("/");
})
app.listen(8080, function(){
    console.log("server is running at 8080");
} )