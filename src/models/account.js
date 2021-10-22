const DUMMY = require('../util/dummy');

const Account = {};

Account.create = (args) => {
  const bindings = args[0];
  const account = DUMMY[DUMMY.length-1].account + 1;
  bindings.account = account;
  DUMMY.push(bindings);
}

Account.findById = (args) => {
  const id = args[0];
  return DUMMY.filter((a) => a.account === id);
}

Account.fetchAll = () => {
  return DUMMY;
}

module.exports = Account;