'use strict';

const express = require('express');
const {authenticate} = require('./common/passport');

const {init, getAccounts, getBeneficiaries, transfer} = require('./common/accounts');

const router = express.Router();

router.get('/', authenticate(), async (req, res) => {
  if (req.user && req.user.username) {
    res.json(getAccounts(req.user.username));
  } else {
    res.status(404).send('Not found');
  }
});

router.get('/beneficiaries', authenticate(), async (req, res) => {
  if (req.user && req.user.username) {
    res.json(getBeneficiaries());
  } else {
    res.status(404).send('Not found');
  }
});

router.post('/transfer', authenticate(), async (req, res) => {
  if (req.user && req.user.username) {
    res.json(transfer(req.user.username, req.body.from, req.body.to, req.body.amount));
  } else {
    res.status(404).send('Not found');
  }
});

init();

export {router};
