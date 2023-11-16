const mongoose = require("mongoose");

const { Schema } = mongoose;

const mashupSchema = new Schema({

  song1Link: String,
  song1Start: Number,
  song1End: Number,
  crossFadePoint: Number,
  crossFadeDuration: Number,
  song2Link: String,
  song2Start: Number,
  song2End: Number,
 
});

const Mashup = mongoose.model("Mashup", mashupSchema);

module.exports = Mashup;