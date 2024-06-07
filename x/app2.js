require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const GenderModel = require('./models/Gender');
const SeasonModel = require('./models/Season');
const EpisodeModel = require('./models/Episode');
const AnimeModel = require('./models/Anime');
const genderRouter = require('./routes/genderRouter.js');
const allData = require('./routes/allData.js');
const seasonRouter = require('./routes/seasonRouter.js');

const { MONGODB_CONNECTION_URI } = process.env;
const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/', genderRouter);
app.use('/', allData);
app.use('./', seasonRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
  });
  