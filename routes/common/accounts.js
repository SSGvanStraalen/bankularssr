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
  if (getAccounts(username).find(acc => {
    return fromAcc == acc.accnr;
  })) {
    let as = [].concat.apply([], Object.values(accounts));
    let from = as.find(a=>{return a.accnr == fromAcc});
    let to = as.find(a=>{return a.accnr == toAcc});
    if (from && to) {
      from.balance = from.balance-amount;
      to.balance = to.balance+amount;
      return {success:true, message:'Transfer complete.'}
    } else {
      return {success:false, message:'Account not found.'}
    }
  } else {
    return {success:false, message:'Not your account.'}
  }
}

export {
  init,
  getAccounts,
  transfer
};
