const signUpController = {};

signUpController.signUpPage = (req, res) => {
  res.status(200).redirect('../signup.html');
};

signUpController.signUp = (req, res, next) => {};

module.exports = signUpController;
