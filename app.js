var express = require('express');
var routes = require('./routes');
var path = require('path');

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', routes.home);
app.get('/star-wars-episode/:episode_number?', routes.movie_single);
app.get('*', routes.not_found);


app.listen(3000, function(){
    console.log('the aplication is running in localhost:3000')
});