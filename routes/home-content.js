'use strict';

const express = require('express');
const router = express.Router();

const staticData = {
  firstText: 'One and only',
  firstHeading: 'KITTYCARD',
  slogenLineOne: 'Buy all the catfood you want',
  slogenLineTwo: 'Kitty dollars must flow',
  slogenLineThree: 'This magic card will help you',
  imgUrl: '',
};

router.get('/', async (req, res) => {
  res.json(staticData);
});

export {router};
