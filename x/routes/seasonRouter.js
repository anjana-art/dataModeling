const mongoose = require('mongoose');
const express = require('express');
const { genderService } = require('../services/genderService.js');
const Episode = require('../models/Episode.js');
const SeasonModel = require('../models/Season');


const seasonRouter = express.Router();
const { MONGODB_CONNECTION_URI } = process.env;

seasonRouter.get('/gender', async (req, res) => {
    try {
        await mongoose.connect(MONGODB_CONNECTION_URI);

        const genders = await GenderModel
            .findById('6662d5b51f6412a046c13780')
            .populate([
                {
                    path: 'name'
                },
                {
                    path: 'description'
                },
               // {
               //      path: 'season',
                //    populate: {
                 //        path: 'episode',
                 //       populate: {
                  //           path: 'comment',
                 //        }
                 //   }
              //  },
            ]);




res.status(201).json({
    status: 'success',
    data: genders
});
//console.log(animes.season[0])  //to console episode documents


     console.log(genders.gender[0])

    } catch (error) {
    console.log(error)
    res.status(400).json({
        status: 'failure',
        data: error
    })
} finally {
    await mongoose.connection.close();
}
});

module.exports = seasonRouter;


