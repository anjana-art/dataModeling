const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    ratings: [Number],
    reviews: [String],
    season: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Season'
    }],
    gender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gender'
    },
  }
);

module.exports = mongoose.model('Anime', AnimeSchema, 'anime');
