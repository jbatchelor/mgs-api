const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
    name: {type: String, required: true, max: 100},
    edition: {type: String, max:25},
    publisher: {type: String, max: 100},
    msrp: { type: Number },
    imageURL: {type: String},
    thumbURL: {type: String},
    bggURL: {type: String}
});

module.exports = mongoose.model('Game', GameSchema);