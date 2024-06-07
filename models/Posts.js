const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    text: String,
    email: String,
    firstName: String,
    lastName: String,
  },
);

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    created: {
      type: Date
    }
  },
);

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  authors: [AuthorSchema],
  comments: [CommentSchema],
  created: {
    type: Date
  }
});

module.exports = mongoose.model('Post', PostSchema, 'post');
