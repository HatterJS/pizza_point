const express = require('express');
const { ObjectId } = require('mongodb');
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

//get goods from mongoDB ----------------->
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
//<-----------------get goods from mongoDB

//get users emails from mongoDB
// app.get('/usersEmails', (req, res) => {
//   const emails = [];
//   db.collection('users')
//     .find()
//     .forEach((item) => emails.push(item.email))
//     .then(() => res.status(200).json(emails))
//     .catch((res) => res.status(500).json({ error: 'Something goes wrong...' }));
// });

//user authorization
app.post('/authorization', (req, res) => {
  db.collection('users')
    .findOne({ email: req.body.email, password: req.body.password })
    .then((userData) => res.status(200).json(userData));
});

//user registration
app.post('/registration', (req, res) => {
  db.collection('users')
    .findOne({ email: req.body.email })
    .then((email) => {
      if (email) {
        res.status(200).json(false);
      } else {
        const userData = {
          ...req.body,
          surname: '',
          phone: '',
          address: { street: '', building: '', apartment: '' }
        };
        db.collection('users').insertOne(userData);
        res.status(200).json(userData);
      }
    });
});

//change users data
app.put('/changeData/:id', (req, res) => {
  db.collection('users')
    .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body })
    .then(() => res.status(200).json(true))
    .catch((res) => res.status(500).json({ error: 'Something goes wrong...' }));
});
