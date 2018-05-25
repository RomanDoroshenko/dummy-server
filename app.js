var os = require("os");
var express = require('express');
var app = express();


const hostname = os.hostname();
const mngiface = JSON.stringify(os.networkInterfaces())
  .match(/192\.168\.100\.\d{1,3}/)[0]

// console.log(mngiface)
app.use(express.static('static'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {

  res.render('index', { 
    hostname: hostname, 
    mngiface: mngiface
  });
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});


