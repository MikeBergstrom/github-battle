var players = require('../controllers/players.js')
var path = require('path')

module.exports = function(app) {
    app.get('/players', function(req,res, next){
        console.log("in team route")
        players.show(req,res, next);
    });

    app.post('/players/create', function(req, res, next) {
        console.log("in player create route")
        console.log(req.body)
        players.add(req, res, next);
    })

    app.post('/players/update', function(req, res, next) {
        players.update( req, res, next)
    })

    app.post('/players/delete', function(req, res, next) {
        console.log("player delete route", req.body)
        players.delete( req, res, next)
    })
    app.get('/current', players.current)

    app.get('/reset', players.reset)

    app.all('*', (req,res,next) => {
        console.log("in root route.js")
        res.sendfile(path.resolve("./battle/dist/index.html"))
    })
}   