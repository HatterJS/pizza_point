const { MongoClient } = require('mongodb');

const URL = 'mongodb://127.0.0.1:27017/pizza_point';

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log('Connected to db');
        dbConnection = client.db();
        return cb();
      })
      .catch((error) => {
        return cb(error);
      });
  },
  getDb: () => dbConnection
};
