require('dotenv').config();
const mongoose = require('mongoose');
const PostModel = require('./models/PostsNormalized');
const CommentModel = require('./models/Comment');

const { MONGODB_CONNECTION_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

    const post = await PostModel.findOne({
      title: 'title 321'
    }).populate(['comments', 'authors']);

    console.log(post);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();
