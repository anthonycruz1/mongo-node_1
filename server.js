const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const loginRouter = require('./routes/loginRouter');
const signUpRouter = require('./routes/signUpRouter');
const bodyParser = require('body-parser');

// Connects to local database mongo database
mongoose.connect('mongodb://localhost/acme', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Listen for Mongoose connecting to the database
mongoose.connection
  .once('open', () => {
    console.log('Connected to database');
  })
  .on('error', (error) => {
    console.log('Error connecting to database: ', error);
  });

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}`));

app.post('/login', loginRouter);
app.get('/signup', signUpRouter);
app.post('/signup', signUpRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
