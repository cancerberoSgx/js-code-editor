var connect = require('connect'); 
// var fs = require('fs'); 

// var express = require('express');
// var app = express();

// Authenticator
// app.use(express.basicAuth(‘testUser’, 'testPass'));

// app.get('/home', function(req, res) {
//  res.send('Hello World');
// });


// var auth = require('basic-auth');


//starts server and neccesary middleware
var server = connect(
	connect.logger('dev')
	// connect.bodyParser()
	// connect.basicAuth()
	// ,connect.basicAuth('username', 'password')
	// connect.session({secrete: 'my app secret'})
);
// connect();
// server.use();

// var authenticate = function(userName, psswd) {
// 	return userName==='sg' && psswd==='test'; 
// }
// connect()
//   .use(connect.basicAuth(function(user, pass){
//     return 'sg' == user && 'test' == pass;
//   }))

// connect().use(connect.basicAuth(function(user, pass, fn){
// 	console.log('basicAuth')
// 	if(authenticate(user, pass)) {
// 		fn(null, {username: user}); 
// 		next(); 
// 	}
// 	else {
// 		fn(new Error('Unauthorized')); 
// 	}
// })); 


//define a connect for basic auth. Must be first!
//first logout
// connect.basicAuth(function(user, pass, fn){
// 	if(req.url.indexOf('/logout') === 0) {
// 		delete req.session.authStatus;
// 			// res.send([
// 			// 'You are now logged out.',
// 			// '&lt;br/>',
// 			// '<a href="./secure">Return to the secure page. You will have to log in again.</a>',
// 			// ].join(''));
// 	}
// }); 
// var basicAuthHandler = function(user, pass, fn){
// 	if(authenticate(user, pass)) {
// 		fn(null, {username: user}); 
// 	}
// 	else {
// 		fn(new Error('Unauthorized')); 
// 	}
// }; 
// basicAuthHandler.length=3;
// connect.basicAuth(basicAuthHandler); 


//login page
// server.use(function(req, res, next){
// 	console.log(req.url); 
// 	if('GET' === req.method && req.url.indexOf('/login') === 0) {
// 		var user = req.body.userName, psswd = req.body.psswd; 
// 		if( user && psswd && 
// 			authenticate(user, psswd)) {
// 			req.session.loggedIn = true;
// 			req.session.user = {name: user}; 
// 		}
// 		else {	
// 			res.end('bad User Name or Password'); 
// 		}
// 		console.log('login');
// 	}
// 	else {
// 		next();
// 	}
// }); 

//at last serve static files - we only serve if user islogged in so we don't use connect.static but rather res.senfFile that will use the same impl 
// http://stackoverflow.com/questions/11473607/node-js-express-js-what-is-the-easiest-way-to-serve-a-single-static-file
var clientFolder = __dirname + '/../client'; 
// server.use(function(req, res, next){
// 	// var user = auth(req);
// 	// if(req.remoteUser && )
// 	console.log("seba", user); 
// 	next();
// }); 
server.use('/', connect.static(clientFolder)); //this works! but we need to filter :(




server.listen(3000); 