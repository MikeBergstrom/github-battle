var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    name: String,
    score: Number,
    image: String  
}, {timestamps: true})

var Player = mongoose.model('Player', PlayerSchema);