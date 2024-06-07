const mongoose = require('mongoose');

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

module.exports = mongoose.model('Author', AuthorSchema);
