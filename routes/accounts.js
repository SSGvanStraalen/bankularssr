'use strict';

const express = require('express');
const {authenticate} = require('./common/passport');

const { getAccounts } = require('./common/user');

const router = express.Router();

router.get('/', authenticate(), async (req, res) => {
  if (req.user && req.user.username) {
    res.json(getAccounts(req.user.username));
  }
  res.status(404).send('Not found');;
});

export {router};
