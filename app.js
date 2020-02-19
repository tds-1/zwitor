var express =require("express");
var bodyParser=require("body-parser");

var app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));


app.get("/",function(req,res){
   res.render("index");
});

app.listen("3000",process.env.IP,function(){
    console.log("Connected");
});
