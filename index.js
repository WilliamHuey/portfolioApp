var express = require('express'),
    //home = require('./routes/home.js'),
    path = require('path'),
    stylus = require('stylus'),
    nib = require('nib');

var app = express();

function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib())
        .import('nib');
}

app.configure(function(){
   app.set('view engine', 'jade');
   app.set('views', __dirname + '/views');
   app.use(stylus.middleware({src: __dirname + '/public', compile : compile}));
   app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/',function(req,res){
   res.render('home');
});



app.listen(3000);