const express = require('express');
const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  console.log('detected');
  console.log(req.body);
});

module.exports = loginRouter;
