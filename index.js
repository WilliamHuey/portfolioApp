var express = require('express'),
    //home = require('./routes/home.js'),
    path = require('path');

var app = express();

app.configure(function(){
   app.set('view engine', 'jade');
   app.set('views', __dirname + '/views');
   app.use(express.static(path.join(__dirname, 'public')));
});

//app.get('/', home.index);
app.get('/', function(req,res){
   res.render('home');
});

app.listen(3000);