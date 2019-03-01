'use strict';

const express = require('express');
const user = require('./user');
const accounts = require('./accounts');
const homeContent = require('./home-content');

const router = express.Router();

router.use('/user', user.router);
router.use('/accounts', accounts.router);
router.use('/homeContent', homeContent.router);

export {router};
