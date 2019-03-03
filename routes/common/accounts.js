'use strict';


import {accounts as accs} from '../data/data';

let accounts;

function init() {
  accounts = {...accs};
}

function getAccounts(username) {
  return accounts[username];
}

function transfer(username, fromAcc, toAcc, amount) {
  if (accounts[username].find(acc => {
    return toAcc == acc.accnr;
  })) {
    return {success:false, message:'Not implemented.'}
  } else {
    return {success:false, message:'Not your account.'}
  }
}

export {
  init,
  getAccounts,
  transfer
};
