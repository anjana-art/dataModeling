const anime = new AnimeModel({
      name: 'Naruto Shippuden',
      description: 'Naruto Uzumaki wants to be the best ninja in the land.',
      ratings: [5, 4, 2, 3, 5, 5],
      reviews: [
        'This anime has great canon.',
        'I started watching Naruto back in 2003.'
      ],
      seasonName: 'S1: Naruto Shippuden: The Kazekage\'s Rescue',
      seasonDescription: "He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization ",
      episodeName: "S1 E2 - The Akatsuki Makes Its Move",
      episodeDescription: "Naruto and Sakura team up and challenge Kakashi to a survival challenge to show off their progress.",
      episodeReleaseDate: new Date(2007, 5, 17),
      episodeComment: [
        "Episodes like this never get old...note to writers....viewers will watch old episodes to 'relive the magic' without you having to put flashbacks into new episodes...",
        "Anyone here in 2021/2022"
      ]
    });
    await anime.save();



    require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const GenderModel = require('./models/Gender');
const SeasonModel = require('./models/Season');
const EpisodeModel = require('./models/Episode');
const AnimeModel = require('./models/AnimeEmbedded');

const { MONGODB_CONNECTION_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGODB_CONNECTION_URI);

    const gender = new GenderModel({
      name: 'Gender Name',
      description: 'Gender Description'
    });
    await gender.save();
    
    const season = new SeasonModel({
      name: "S1: Naruto Shippuden: The Kazekage's Rescue",
      description: "He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization"
    });
    await season.save();
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
    // const anime = new AnimeModel({
    //   name: 'Naruto Shippuden',
    //   description: 'Naruto Uzumaki wants to be the best ninja in the land.',
    //   ratings: [5, 4, 2, 3, 5, 5],
    //   reviews: [
    //     'This anime has great canon.',
    //     'I started watching Naruto back in 2003.'
    //   ],
    //   gender,
    //   season,
    //   episode
    // });

    const anime2 = new AnimeModel({
      name: 'Naruto Shippuden',
      description: 'Naruto Uzumaki wants to be the best ninja in the land.',
      ratings: [5, 4, 2, 3, 5, 5],
      reviews: [
        'This anime has great canon.',
        'I started watching Naruto back in 2003.'
      ],
      gender,
      season,
      episode: episode2
    });

    await anime2.save();
    console.log(anime);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();


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

    const gender = new GenderModel({
      name: 'Fourth Gender Name',
      description: ' 4th Gender Description'
    });
    await gender.save();
    
    const season = new SeasonModel({
      name: "S4: Naruto Shippuden: The Kazekage's Rescue",
      description: "He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization"
    });
    await season.save();

    const episode1 = new EpisodeModel({
      name: "S1 E1 - Homecoming",
      description: "A figure passes through the gates. It’s an older Naruto, who has returned from a long training journey with Jiraiya. Naruto Uzumaki is back!",
      comment: [
        "I guess I'm not alone in RE-WATCHING naruto!!!!!!!!!!!!!",
        "Who is here watching in 2021?!"
      ]
    });
    await episode1.save();

    const episode2 = new EpisodeModel({
      name: "S1 E2 - The Akatsuki Makes Its Move",
      description: "Naruto and Sakura team up and challenge Kakashi to a survival challenge to show off their progress.",
      comment: [
        "I guess I'm not alone in RE-WATCHING naruto!!!!!!!!!!!!!",
        "Who is here watching in 2021?!"
      ]
    });
    await episode2.save();

    const anime = new AnimeModel({
      name: 'Naruto Shippuden',
      description: 'Naruto Uzumaki wants to be the best ninja in the land.',
      ratings: [5, 4, 2, 3, 5, 5],
      reviews: [
        'This anime has great canon.',
        'I started watching Naruto back in 2003.'
      ],
      gender,
      season,
      episode: [
        episode1,
        episode2
      ]
    });


    await anime.save();
    console.log(anime);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.connection.close();
  }
})();


const gender = new GenderModel({
  name: 'Gender Name',
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

const anime = new AnimeModel({
  name: 'Naruto Shippuden',
  description: 'Naruto Uzumaki wants to be the best ninja in the land.',
  ratings: [5, 4, 2, 3, 5, 5],
  reviews: [
    'This anime has great canon.',
    'I started watching Naruto back in 2003.'
  ],
  gender,
  season,
});