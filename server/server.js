const express = require('express');
const { connectToDb, getDb } = require('./db');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
);

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

function getGoods(res, category) {
  const goods = [];
  db.collection('goods')
    .find({ category: category })
    .forEach((item) => goods.push(item))
    .then(() => {
      res.status(200).json(goods);
    })
    .catch((res) => res.status(500).json({ error: 'Something goes wrong...' }));
}

app.get('/pizzas', (req, res) => {
  getGoods(res, 'pizzas');
});

app.get('/drinks', (req, res) => {
  getGoods(res, 'drinks');
});

app.get('/desserts', (req, res) => {
  getGoods(res, 'desserts');
});

app.get('/additionals', (req, res) => {
  getGoods(res, 'additionals');
});
