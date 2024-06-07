const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    text: String,
    email: String,
    firstName: String,
    lastName: String,
  },
);

module.exports = mongoose.model('Comment', CommentSchema);
