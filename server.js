// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors())

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  const data = fs.readFileSync('budget-data.json');
  res.json(JSON.parse(data.toString()));
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});