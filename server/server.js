const express = require('express');
const { connectToDb, getDb } = require('./db');
// const cors = require('cors');

const app = express();
const server = require('http').Server(app);

app.use(express.json());

// app.use(cors({
//     origin: '',
//     methods: ["GET", "POST", "PUT", "DELETE"]
// }));

let db;

connectToDb((error) => {
  if (!error) {
    server.listen(8887, (error) => {
      if (error) {
        throw Error(error);
      }
      console.log('Server started');
    });
    db = getDb();
  } else {
    console.log(`DB connection error: ${error}`);
  }
});

app.get('/www', (req, res) => {
  console.log('www');
});
