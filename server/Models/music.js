const mongoose = require("mongoose");

const { Schema } = mongoose;

const musicSchema = new Schema({
    rank: Number,
    title: String,
    artist: String,
    cover: String,
    audio: String,
    weeksOnChart: Number,
 
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;