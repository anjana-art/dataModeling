const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
  name: String,
  description: String,
  comment: [String],
});

module.exports = mongoose.model('Episode', EpisodeSchema, 'episode');

