var express = require('express');
 
var app = module.exports = express.createServer();
 
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});
 
app.get('/logget', function(req, res){
  console.log('get to log');
  console.log(req.query.callback);
  console.log(req.param('somedata'))
   
  res.header('Content-Type', 'application/json');
  res.header('Charset', 'utf-8')  
  res.send(req.query.callback + '({"something": "rather", "more": "pork", "tua": "tara"});');  
});
 
app.listen(3000);
console.log("Express server listening on port");
