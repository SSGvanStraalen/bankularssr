'use strict';

const Promise = require('promise');

import {users, accounts} from '../data/data'

function getUser(username) {
  return users.find(x => {
    return x.username === username;
  });
}
function getAccounts(username) {
  return accounts[username];
}

async function validateUser(username, password) {
  const user = getUser(username);
  let status;
  if (user) {
    status = new Promise((fulfill, reject) => {
      if (password === user.password) {
        fulfill({
          success: true,
          user: {
            username: user.username, firstname: user.firstname, lastname: user.lastname, prefix: user.prefix,
          },
        });
      } else {
        reject(new Error('Authentication failed. Wrong password.'));
      }
    });
  } else {
    status = {success: false, msg: 'User does not exist'};
  }
  return status;
}

export {
  getUser,
  getAccounts,
  validateUser,
};
