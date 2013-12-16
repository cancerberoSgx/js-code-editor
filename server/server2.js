var express = require('express');
var fs = require('fs'); 
var _ = require('underscore'); 

var app = express();


//first of all authenticate the user - the user cannot enter this page if it si not authenticated. 
app.use(express.basicAuth(function(user, pass, callback) {
	var result = (user === 'sg' && pass === 'test');
	callback(null /* error */, result);
}));

//then we intercept calls to index and render a template because we need to pass user information to the client. 

var clientFolder = __dirname + '/../client/'; 
var indexTemplate = clientFolder + 'index.underscoreTemplate'; 
app.use(function(req, res, next){
	console.log("req.url: "+req.url)
	if(req.url==='' || req.url==='/' || req.url==='/index.html'|| req.url==='index.html') {
		var context = buildTemplateContext(req, res); 
		renderTemplate(indexTemplate, context, function(output){
			res.send(output); 
		});
	}
	else {
		next();
	}
}); 


function renderTemplate(templFilePath, context, fn) {	
	fs.readFile(templFilePath, 'utf8', function (err,data) {
		if (err) {
			throw err;
		}
		else {
			var templ = _.template(data); 
			var output = templ(context); 
			fn(output); 
		}
	});
}

function buildTemplateContext(req, res) {	
	var context = {user: {username: req.auth.username, password: req.auth.password}}; 
	return context; 
}

//last we serve all static files
app.use('/', express.static(clientFolder));

app.listen(process.env.PORT || 3000);
