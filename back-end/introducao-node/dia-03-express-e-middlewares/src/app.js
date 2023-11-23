const express = require('express');

const {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateUserInfo,
  auth,
} = require('./middlewares');

const app = express();
const generateToken = require('./utils/generateToken');

app.use(express.json());

app.post(
  '/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
},
);

app.post('/signup', validateUserInfo, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = app;
