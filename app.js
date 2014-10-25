// my dependencies
var express = require("express"),
app = express(),

bodyParser = require("body-parser");
// db = require("./models/index");

// my middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

// my routes
app.get('/', function(req,res){
	res.render('index.ejs');
});

app.get('login', function(req,res){
	res.render('login.ejs');
});

app.get('home', function(req,res){
	res.render('home.ejs');
});

app.get('login', function(req,res){
	res.render('login.ejs');
});

// app.post('login', function(req,res){
// 	// more stuff
// 	res.render('login.ejs');
// });


// app.post('signup', function(req,res){
// 	// more stuff
// 	res.render('signup.ejs');
// });


app.get('*', function(req,res){
	res.status(404);
	res.render('404.ejs');
});


// my local server
app.listen(3000, function(){
  "The quote library opens on port 3000!";
});