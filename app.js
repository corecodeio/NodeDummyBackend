const express = require('express');
const app = express();

const accountRoutes = require('./src/routes/account');
const badRequestRoute = require('./src/routes/bad-request');

app.use(express.json());

app.use(accountRoutes);
app.use(badRequestRoute);


app.listen(3800, () => {
  console.log('Server running on port: 3800');
});
