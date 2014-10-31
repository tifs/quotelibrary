// my dependencies
var express = require("express"),
bodyParser = require("body-parser"),
passport = require("passport"),
passportLocal = require("passport-local"),
cookieParser = require("cookie-parser"),
session = require("cookie-session"),
db = require("./models/index"),
flash = require("connect-flash"),
async = require("async"),
_ = require("underscore"),
app = express();
var morgan = require('morgan');
var routeMiddleware = require("./config/routes");

// my middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));

app.use(session( {
	secret: 'thisismysecretkey',
	name: 'snickerdoodle',
	maxage: 10000000
	})
);

// start passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// prepare our serialize functions
passport.serializeUser(function(user, done){
	console.log("SERIALIZED JUST RAN!");
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	console.log("DESERIALIZED JUST RAN!");
	db.User.find({
		where: {
			id: id
		}
	})
	.done(function(error,user){
		done(error,user);
	});
});

// my routes, with routeMiddleware shorthand
app.get('/', routeMiddleware.checkAuthentication, function(req,res){
	db.Author.findAll().done(function(err, authors){
		console.log("IS ANYBODY THERE???")
		console.log(authors)
		
		db.Book.findAll().done(function(error, books){
			console.log("found authors", books);
			db.Quote.findAll().done(function(error, quotes){
				db.Author.find(req.params.id).done(function(err,selectedAuthor){
				res.render('index', {authors:authors, books:books, quotes:quotes, selectedAuthor:selectedAuthor});		
				});
			});
		});
	});
});

app.get('/authors/:id', function(req,res){
	var singleBookQuotes = [];
	db.Author.find(req.params.id).done(function(err,singleAuthor){
		singleAuthor.getBooks({include:db.Quote}).done(function(err,books){
				async.forEach(books,function(book,callback){
					book.getQuotes().done(function(err,quotes){
						if(quotes.length >0){
							singleBookQuotes.push(quotes);	
						}
						callback();
					});
				},function(){
					var finalArray = _.flatten(singleBookQuotes);
					console.log(finalArray);
					db.Author.findAll().done(function(err, authors){
						res.render('singleauthor', {singleAuthor:singleAuthor, authors:authors, books:books, quotes:finalArray});
					});
					
				});
			});
	});
});

app.get('/books/:id',function(req,res){
	db.Author.findAll().done(function(err,authors){
		console.log("if you could not be null...that would be awesome")
		console.log(authors)
	db.Book.find(req.params.id).done(function(err,book){
		book.getQuotes().done(function(err,quotes){
			book.getAuthor().done(function(err,singleAuthor){
				console.log(singleAuthor);
				res.render('singlebook', {book:book, quotes:quotes, singleAuthor:singleAuthor, authors:authors});	
			});
			});
		});
	});
});


  // if (book.AuthorId === author.id) {
  // }



// app.get('/pick/:authorId',routeMiddleware.checkAuthentication, function(req,res){
// 	// GET AUTHORID FROM REQUEST	
// 	// find author -> books -> quotes
// 	db.Author.findAll().done(function(err, authors){
// 		console.log("found authors ", authors);
// 		// for each author: if authorID == author.id -> author.selected = true;
// 		db.Book.findAll().done(function(error, books){
// 			console.log("found authors", books);
// 			// for each book: if authorID == book.authorid -> book.selected = true;
// 			db.Quote.findAll().done(function(error, quotes){

// 			res.render('index', {authors:authors, books:books, quotes:quotes});
// 			});
// 		});
// 	});
// });


app.get('/signup', routeMiddleware.preventLoginSignup, function(req,res){
	res.render('index', { username: ""});
});
	
app.get('/login', routeMiddleware.preventLoginSignup, function(req,res){
	res.render('index', {message: req.flash('loginMessage'), username: ""});
});

app.get('/home', routeMiddleware.checkAuthentication, function(req,res){
	res.render('index', {user: req.user});
});


// on submit, create a new user from form data
app.post('/submit', function(req,res){
  db.User.createNewUser(req.body.username, req.body.password,
  function(err){
    res.render("signup", {message: err.message, username: req.body.username});
  },
  function(success){
    res.redirect("/");
  });
});

// authenticate users when they log in
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
});

// 404 page for all errors
app.get('*', function(req,res){
	res.status(404);
	res.render('404');
});





// my local server
app.listen(process.env.PORT || 3000, function(){
  "The quote library opens on port 3000!";
});