/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
const express = require('express');
const router = express.Router();

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
// None

/***************************************************************************************************
 ********************************************** routes *********************************************
 **************************************************************************************************/
// /games - return an array list of all games (or an empty array)
router.get('/', async (req, res) => {
  const gamesArr = [
    {
      title: 'Pacman', // required
      genre: 'Arcade', // required
      releaseYear: 1980 // not required
    },
    {
      title: 'Final Fantasy', // required
      genre: 'nes', // required
      releaseYear: 1987 // not required
    },
    {
      title: 'Lunar Eternal Blue', // required
      genre: 'sega-cd', // required
      releaseYear: 1994 // not required
    },
    {
      title: 'Chrono Trigger', // required
      genre: 'snes', // required
      releaseYear: 1995 // not required
    },
    {
      title: 'Xenogears', // required
      genre: 'playstation', // required
      releaseYear: 1998 // not required
    },
    {
      title: 'parasite eve', // required
      genre: 'playstation', // required
      releaseYear: 1998 // not required
    }
  ];

  res.status(200).send(gamesArr);
});

// /games - adds a game to the list
router.post('/', (req, res) => {
  const game = req.body;
  res.status(201).json(game);
});

/***************************************************************************************************
 ********************************************* export(s) *******************************************
 **************************************************************************************************/
module.exports = router;
