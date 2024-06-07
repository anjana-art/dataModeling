require('dotenv').config();
const mongoose = require('mongoose');
const PostModel = require('./models/Posts');

const { MONGODB_CONNECTION_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

    const post = await PostModel.findOne({
      title: 'title'
    });

    console.log(post);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();
