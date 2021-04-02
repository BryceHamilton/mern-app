const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

express()
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())

  .get('/hello', (req, res) => {
    res.status(200).json({ hello: 'hello 👋' });
  })

  .listen(PORT, () => {
    console.info(`🌍 Listening on port ${PORT}`);
  });
