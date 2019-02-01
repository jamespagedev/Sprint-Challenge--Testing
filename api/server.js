/***************************************************************************************************
 ******************************************* dependencies ******************************************
 **************************************************************************************************/
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

/***************************************************************************************************
 ******************************************** middleware *******************************************
 **************************************************************************************************/
server.use(helmet()); // hides your tech stack from sniffers
server.use(express.json()); // built-in
server.use(morgan('short')); // logging middleware
server.use(cors()); // allows domains/ports to connect to your server

/***************************************************************************************************
 ********************************************** routes *********************************************
 **************************************************************************************************/
server.get('/', (req, res) => {
  res.send(`Main Server Running...`);
});

const gamesRouter = require('./routes/gamesRouter.js');
server.use('/api/games', gamesRouter);

/***************************************************************************************************
 ********************************************* export(s) *******************************************
 **************************************************************************************************/
module.exports = server;
