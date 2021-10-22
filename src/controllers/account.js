const Account = require('../models/account');

module.exports.createAccount = (req, res, next) => {
  const { name, type, currency } = req.body;
  Account.create([{ account : 0, name, type, currency }]);
  res.status(200).json({ valid: true, message: 'Ok' });
}

module.exports.getAccount = (req, res, next) => {
  const data = Account.findById([Number(req.params.id)]);
  res.status(200).json({ valid: true, message: 'Ok', data });
}

module.exports.getAccounts = (req, res, next) => {
  const data = Account.fetchAll();
  res.status(200).json({ valid: true, message: 'Ok', data });
}