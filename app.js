var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//title
//image
//body
//created

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
})