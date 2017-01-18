var express=require('express');
var app= express();
//Hosting static files
app.use(express.static(__dirname + '/'));
console.log("static files initialized..");

//Routing
app.get("/", function(req,res){
    res.redirect("/views/index.html");
    
});
app.get("/landing", function(req,res){
    //res.send("Irving, Nepal");
    res.redirect("../views/index.html");
    
});
app.get("/texas", function(req,res){
    res.send("Irving");
    
});

//launching server
app.listen(8080, function(req,res){
           console.log("Opening port 8080:test");
            console.log('application launched at localhost:8080')
           });