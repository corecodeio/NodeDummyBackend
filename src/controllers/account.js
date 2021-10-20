const DUMMY = require('../util/dummy');

module.exports.createAccount = (req, res, next) => {
  const { name, type, currency } = req.body;
  const account = DUMMY[DUMMY.length-1].account + 1;
  DUMMY.push({ account, name, type, currency });
  res.status(200).json({ valid: true, message: 'Ok' });
}

module.exports.getAccount = (req, res, next) => {
  const account = DUMMY.filter((a) => a.account === Number(req.params.id));
  res.status(200).json({ valid: true, message: 'Ok', data: account });
}

module.exports.getAccounts = (req, res, next) => {
  res.status(200).json({ valid: true, message: 'Ok', data: DUMMY });
}