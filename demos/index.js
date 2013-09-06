var express = require('express')
  , http = require('http')
  , path = require('path')
  , os = require('os')
  , exec = require('child_process').exec
  , child;

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  res.redirect('/demos.html');
});

http.createServer(app).listen(app.get('port'), function() {

  var demo_url = 'http://localhost:' + app.get('port') + '/demos.html';
  var command;

  if (os.platform() == 'darwin') { command = 'open ' + demo_url; }
  else if (os.platform() == 'linux') { command = 'xdg-open ' + demo_url; }
  else { command = 'start ' + demo_url; }

  child = exec(command, function(error, stdout, stderr) {
    if (error) { console.log(error); }
  });

  console.log('Running demos at: ' + demo_url);

});
