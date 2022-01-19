const connectToMongo = require('./db.js');
const express = require('express')
connectToMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Prasoon!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})