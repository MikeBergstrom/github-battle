var mongoose = require('mongoose');
var Player = mongoose.model('Player');
mongoose.Promise = global.Promise
var session = require('express-session')

module.exports = {
    show: function(req, res, next){
        console.log("show players controller")
        Player.find(function(err, players){
            if(err){
                console.log('errors', err)
            } else {
                console.log('retrieve success')
                res.json(players)
            }
        })
    },

    current: function(req, res, next){
        let players = [req.session.player1, req.session.player2]
        console.log(players)
        res.json(players);
    },


    add: function(req, res, next){
        console.log("controller add", req.body)
        let newPlayer= new Player(req.body);
        newPlayer.save(function(err, player){
            if(err){
                console.log("save errors", err)
            } else {
                console.log('successfully saved')
                console.log(req.session.player1)
                if(req.session.player1){
                    req.session.player2 = player;
                    req.session.save()
                    console.log("session2", req.session.player2)
                } else {
                    req.session.player1 = player;
                    req.session.save()
                    console.log(req.session.player1,"session1")
                }
            }
            console.log(req.session.player1)
        })
    },

    reset: function(req, res, next){
        req.session.destroy()
        res.redirect('/battle')
    },

    delete: function( req, res, next){
        console.log("controller delete", req.body.name);
        Player.remove({name: req.body.name}, function(err){
            if(err){
                console.log('delete errors', err)
            } else {
                console.log('delete success')
                return Player.find()
            }
        })
    },

    update: function(req, res, next){
        console.log("controller update", req.body.name, req.body.games)
        Player.update({name:req.body.name},{games: req.body.games}, function(err){
            if(err){
                console.log("update errors", err)
            } else {
                console.log("update success")
            }
        }) 
    }
}