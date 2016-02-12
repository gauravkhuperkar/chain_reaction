var http = require('http');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req, res){
	res.redirect('index.html');
})

var server = http.createServer(app).listen(2222);
