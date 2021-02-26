const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const loginRouter = require('./routes/login.js');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

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

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.post('/', loginRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
