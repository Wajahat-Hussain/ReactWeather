var express = require('express');
//Create Our App

var app = express();

app.use(express.static('public'));

app.listen(3000,function () {
    console.log('Express server is on port 3000');
});