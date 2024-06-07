require('dotenv').config();
const mongoose = require('mongoose');
const PostModel = require('./models/Posts');
const CommentModel = require('./models/Comment');
const AuthorModel = require('./models/Author');

const { MONGODB_CONNECTION_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

    let author = await AuthorModel.findOne({
      email: 'test@domain.com'
    });
    if (!author) {
      author = new AuthorModel({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'test@domain.com'
      });
      await author.save();
    }

    const comment = new CommentModel({
      text: 'Comment',
      firstName: 'FirstName',
      lastName: 'LastName',
      email: 'test@domain.com'
    });
    await comment.save();

    const post = new PostModel({
      title: 'title 321',
      text: 'text 321',
      authors: [
        author
      ],
      comments: [
        comment
      ],
    });

    await post.save();
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();

