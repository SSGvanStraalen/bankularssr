'use strict';

const express = require('express');
const router = express.Router();

const staticData = {
  firstText: 'One and only',
  firstHeading: 'KITTYCARD',
  long: 'Buy all the catfood you want Kitty dollars must flow This magic card will help you',
  imgUrl: '',
};

router.get('/', async (req, res) => {
  res.json(staticData);
});

export {router};
