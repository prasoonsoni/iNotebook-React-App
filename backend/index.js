const connectToMongo = require('./database/db.js');
const express = require('express');
const { json } = require('express');

connectToMongo();

const app = express()
const port = 5000

app.use(express.json());

// Available Routes
app.use('/api/auth/createuser', require('./routes/auth/createuser'));
app.use('/api/auth/login', require('./routes/auth/login'));
app.use('/api/auth/getuser', require('./routes/auth/getuser'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})