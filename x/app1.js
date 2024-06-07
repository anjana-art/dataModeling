require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const GenderModel = require('./models/Gender');
const SeasonModel = require('./models/Season');
const EpisodeModel = require('./models/Episode');
const AnimeModel = require('./models/Anime');

const { MONGODB_CONNECTION_URI } = process.env;


(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

    const animes = await AnimeModel
      .findById('6661909a911c96db0257ddcb')
       .populate([
         {
           path: 'gender'
         },
         {
           path: 'season',
           populate: 'episode'
         },
       ]);
    console.log(animes.season[0])
  
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();
