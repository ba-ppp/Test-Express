var express = require('express')
var app = express()
var port = 3000

app.get('/',function(request,response){
	response.send('<h1>Hello World!</h1>')
});

app.get('/users',function(request,response){
	response.send('<h2>Hello World!</h2>')
});

app.listen(port,function(){
	console.log('app listening on port: ',port)
})