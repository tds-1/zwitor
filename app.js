var express =require("express"),
    app=express(),
    bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(__dirname + "/public"));


app.get("/",function(req,res){
   res.render("index");
});
app.get("/contacts",function(req,res){
  res.render("contacts");
});

app.listen("3000",function(){
    console.log("Connected");
});