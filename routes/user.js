'use strict';

const express = require('express');
const {validateUser} = require('./common/user');
const {generateToken} = require('./common/passport');

const router = express.Router();

router.post('/login', (req, res) => {
  validateUser(req.body.username, req.body.password).then((status) => {
    if (status && status.success) {
      // return the information including token as JSON
      res.json({success: true, token: generateToken(status.user)});
    } else {
      res.status(401).json({success: false, msg: status.msg});
    }
  }).catch((err) => {
    res.status(401).json({success: false, msg: err.message});
  });
});

export {router};
