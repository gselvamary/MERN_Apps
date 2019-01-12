const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const users = require('./routes/user/info');
const depts = require('./routes/dept/info');



const connect = require('./config/keys');
/*
// connects our back end code with the database
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log(`Connected to the Database ${dbRoute}`));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));
*/
app.use(bodyParser.json());
app.use('/users', users);
app.use('/depts', depts);


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));