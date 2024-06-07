const mongoose = require('mongoose');

const AnimeDesnormalizedSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: String,
    ratings: [Number],
    reviews: [String],
    seasonName: String,
    seasonDescription: String,
    episodeName: String,
    episodeDescription: String,
    episodeComment: [String],
    gender: String
  }
);

module.exports = mongoose.model('AnimeDesnormalized', AnimeDesnormalizedSchema, 'anime_desnormalized');
