require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const GenderModel = require('./models/Gender');
const SeasonModel = require('./models/Season');
const EpisodeModel = require('./models/Episode');
const AnimeModel = require('./models/Anime');

const { MONGODB_CONNECTION_URI } = process.env;
//UPfXNIPu2wZRMQHe

(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

  //  const anime = await AnimeModel.find({}).populate([
  //     {
  //      path: 'gender'
   //   }, 
   //   {
   //     path: 'season',
   //     populate: 'episode'
   //   }]);
    // console.log(anime.toString());
   // console.log(anime[0].season.toString());

   const gender = new GenderModel({
    name: '1st Gender Name',
    description: 'Gender Description'
  });
  await gender.save();

  const episode = new EpisodeModel({
    name: "S1 E1 - Homecoming",
    description: "A figure passes through the gates. It’s an older Naruto, who has returned from a long training journey with Jiraiya. Naruto Uzumaki is back!",
    comment: [
      "I guess I'm not alone in RE-WATCHING naruto!!!!!!!!!!!!!",
      "Who is here watching in 2021?!"
    ]
  });
  await episode.save();

  const episode2 = new EpisodeModel({
    name: "S1 E2 - The Akatsuki Makes Its Move",
    description: "Naruto and Sakura team up and challenge Kakashi to a survival challenge to show off their progress.",
    comment: [
      "I guess I'm not alone in RE-WATCHING naruto!!!!!!!!!!!!!",
      "Who is here watching in 2021?!"
    ]
  });
  await episode2.save();
  
  const season = new SeasonModel({
    name: "S1: Naruto Shippuden: The Kazekage's Rescue",
    description: "He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization",
    episode: [
      episode,
      episode2
    ]
  });
  await season.save();
   

  const anime3 = new AnimeModel({
    name: '1st  anime',
    description: ' second anime description Naruto Uzumaki wants to be the best ninja in the land.',
    ratings: [5, 4, 2, 3, 5, 5],
    reviews: [
      'This anime has great canon.',
      'I started watching Naruto back in 2003.'
    ],
    gender,
    season: [
      season
    ],
    
  });


  await anime3.save();
  console.log(anime3);
 
  
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();
