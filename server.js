var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios')
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/valid', function (req, res) {
  let data = fs.readFileSync('./valid-invalid.csv', 'utf8')
  res.send(data)
});

app.get('/ratio', function (req, res) {
  let data = fs.readFileSync('./ratio.csv', 'utf8')
  res.send(data)
});




app.listen(3000, function() {
  console.log('listening on port 3000!');
});



