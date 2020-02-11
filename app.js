var express =require("express"),
    app=express();

app.set('view engine','ejs');

app.get("/",function(req,res){
   res.render("index");
});
app.get("/contacts",function(req,res){
  res.render("contacts");
});

app.listen("3000",function(){
    console.log("Connected");
});