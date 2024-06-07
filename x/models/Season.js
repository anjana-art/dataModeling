const mongoose = require('mongoose');

const SeasonSchema = new mongoose.Schema({
  name: String,
  description: String,
  episode: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Episode'
  }],
});

module.exports = mongoose.model('Season', SeasonSchema, 'season');

