const mongoose = require('mongoose');

const AuthorSchema = require('./Author');
const CommentSchema = require('./Comment');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  authors: [{type: mongoose.Schema.Types.ObjectId, ref: 'Author'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
  created: {
    type: Date
  }
});

module.exports = mongoose.model('PostsNormalized', PostSchema, 'post-normalized');
