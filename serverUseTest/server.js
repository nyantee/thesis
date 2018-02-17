
var express = require('express');




//importing the package or module express 
//require is a javascript function that makes the express application


var app = express();
/////////
var server = app.listen(3000);




app.get('/', function(req,res){

res.sendFile(__dirname + '/public/detect.html');



console.log("access html page");


});


app.get('/js', function(req,res){

res.sendFile(__dirname + '/public/detect.js');



console.log("access js page");


});


app.get('/enrollhtml', function(req,res){

res.sendFile(__dirname + '/public/enroll.html');



console.log("access enroll page");


});



app.get('/enrolljs', function(req,res){

res.sendFile(__dirname + '/public/enroll.js');



console.log("access enroll js page");


});














	

