const mongoose = require('mongoose');

const GenderSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model('Gender', GenderSchema, 'gender');

