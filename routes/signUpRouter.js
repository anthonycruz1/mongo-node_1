const express = require('express');
const signUpRouter = express.Router();
const signUpController = require('../controllers/signUpController.js');

signUpRouter.get('/signup', signUpController.signUpPage);
signUpRouter.post('/signup', signUpController.signUp);

module.exports = signUpRouter;
