//requires
var express = require('express');
var app = express();
var path = require('path');

//globals
var port = process.env.PORT || 1122;

//use
app.use( express.static('public'));

//listenerCount
app.listen(port, function(){
  console.log('server is up on 1122');
});

app.get('/', function(req, res){
  res.sendFile( path.resolve('views/index.html'));
});
