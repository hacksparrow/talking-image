var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.redirect('/demos.html');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Load http://localhost:' + app.get('port') + '/demos.html');
});
