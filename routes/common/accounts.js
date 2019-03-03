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
  let from = getAccounts(username).find(acc => {
    return fromAcc == acc.accnr;
  });
  if (from) {
    // all accounts
    let as = [].concat.apply([], Object.values(accounts));
    let to = as.find(a => {
      return a.accnr == toAcc
    });
    if (to) {
      from.balance = from.balance - amount;
      to.balance = to.balance + amount;
      return {success: true, message: 'Transfer complete.'}
    } else {
      return {success: false, message: 'Beneficiary account not found.'}
    }
  } else {
    return {success: false, message: 'Not your own account.'}
  }
}

export {
  init,
  getAccounts,
  transfer
};
