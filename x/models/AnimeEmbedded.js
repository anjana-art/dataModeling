const mongoose = require('mongoose');

const Gender = require('./Gender');
const Season = require('./Season');
const Episode = require('./Episode');

const AnimeEmbeddedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    ratings: [Number],
    reviews: [String],
    season: {
      name: String,
      description: String,
    },
    episode: {
      name: String,
      description: String,
      comment: [String],
    },
    gender: {
      name: String,
      description: String,
    }
  }
);

module.exports = mongoose.model('AnimeEmbedded', AnimeEmbeddedSchema, 'anime-embedded');
