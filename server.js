var express = require('express');
var path = require('path')
var app = express();

app.use(express.static('src'));

app.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './src/index.html'));
})

const port = 8000;

var server = app.listen(port, function () {
  console.log("访问地址为 http://localhost:" + port)
});