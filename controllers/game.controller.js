const Game = require('../models/game.model');

exports.games_all = function(req,res){
    Game.find(function(err, games){
        if(err) return next(err);
        res.send(games);
    });
};

exports.game_create = function(req, res){
    let game = new Game({
        name: req.body.name,
        msrp: req.body.msrp,
        publisher: req.body.publisher,
        imageURL: req.body.imageURL,
        thumbURL: req.body.thumbURL
    });

    game.save(function(err){
        if(err){
            console.log(err);
            return next(err);
        }
        res.send('Game created successfully');
    })
};

exports.game_details = function(req, res){
    Game.findById(req.params.id, function(err, game){
        if(err) return next(err);
        res.send(game);
    });
};

exports.game_update = function(req, res){
    Game.findByIdAndUpdate(
        req.params.id, 
        {$set: req.body},
        function(err, game){
            if(err) return next(err);
            res.send('Game updated');
        }
    );
};

exports.game_remove = function(req, res){
    Game.findOneAndRemove(req.params.id, {select:'name'}, function(err, game){
        if(err) {
            return next(err)
        };
        res.send(game.name + ' deleted successfully.');
    });
};