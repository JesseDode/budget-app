var express = require('express');

var app = express();

const PORT = 8080;

app.use(express.static(__dirname +'/resources/pages'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(PORT, function(){
  console.log("listening on port "+PORT);
})
