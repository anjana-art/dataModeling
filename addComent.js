require('dotenv').config();
const mongoose = require('mongoose');
const PostModel = require('./models/Posts');
const CommentModel = require('./models/Comment');

const { MONGODB_CONNECTION_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

    const comment = new CommentModel({
      text: 'Comment 123',
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'test@domain.com'
    });
    await comment.save();

    const post = await PostModel.findOne({
      title: 'title 321',
    });
    post._doc.comments.push(comment);

    await post.save();
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();
