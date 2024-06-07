const mongoose = require('mongoose');
const express = require('express');
const { genderService } = require('../services/genderService.js');
const AnimeModel = require('../models/Anime.js');

const allDataRouter = express.Router();
const { MONGODB_CONNECTION_URI } = process.env;

allDataRouter.get('/allData', async (req, res) => {
    try {
        await mongoose.connect(MONGODB_CONNECTION_URI);

        const allData = await AnimeModel
            .findById('6662d5b51f6412a046c13788')
            .populate([
                {
                    path: 'name'
                },
                {
                    path: 'description'
                },
                {
                    path: 'season',
                    populate: {
                        path: 'episode',
                        populate: {
                            path: 'comment',
                        }
                    }
                },
                {
                    path: 'ratings'
                },
                {
                    path: ' reviews'
                },

            ]);




        res.status(201).json({
            status: 'success',
            data: allData
        });
        
        console.log(animes.season[0])  //to console episode documents


        console.log(allData.season[0])

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

module.exports = allDataRouter;


