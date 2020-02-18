var sse = require('sse');
var http = require('http');

var value = 0;
var server = http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/event-stream',
		'Access-Control-Allow-Origin':'*'
	})

	setInterval(function(){
		value++;
		message = "data: The value is : "+value+"\n\n";
		res.write(message);
	}, 3000);
})

server.listen(8000,'127.0.0.1', function(){
	var inp = new sse(server);
	inp.on('connection' , function(client){
		client.send("Hi, Can we proceed?");
	}) 
})