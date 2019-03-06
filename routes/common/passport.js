'use strict';

const passport = require('passport');
const {Strategy} = require('passport-jwt');
const jwt = require('jsonwebtoken');

const {getUser} = require('./user');

const secret = 'igocompletelycrazy';

function generateToken(obj) {
  return jwt.sign(obj, secret, {expiresIn: '60m'});
}

function authenticate() {
  return passport.authenticate('jwt', {session: false});
}

function init() {
  // init passport
  let cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) token = req.cookies['jwt'];
    return token;
  };
  const opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: secret,
  };
  passport.use(new Strategy(opts, async (jwtPayload, done) => {
    try {
      const user = getUser(jwtPayload.username);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  }));

  return passport.initialize();
}

export {
  init,
  authenticate,
  generateToken,
};
