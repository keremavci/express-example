var express = require('express')
var app = express()

app.get('/healthcheck', function(req,res){
	res.send('alive:ok')
})

app.listen(3000, function(){
	console.log("Listening on port 3000")
})

