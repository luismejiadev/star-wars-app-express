var data = require('../movies.json');


exports.home = function(request, response){
    response.render('home', {
        title: 'Star War Movies',
        movies: data.movies
    });
};


exports.movie_single = function(request, response){
    var episode_number = request.params.episode_number;
    response.send('this is the page for episode ' + episode_number)
};


exports.not_found = function(request, response){
    response.send('this is not the page you are looking for')
};