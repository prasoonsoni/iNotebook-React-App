const connectToMongo = require('./database/db.js');
const express = require('express');
const { json } = require('express');

connectToMongo();

const app = express()
const port = 5000

app.use(express.json());

// Endpoints for user
app.use('/api/auth/createuser', require('./routes/auth/createuser'));
app.use('/api/auth/login', require('./routes/auth/login'));
app.use('/api/auth/getuser', require('./routes/auth/getuser'));

// Endpoints for notes
app.use('/api/notes/getallnotes', require('./routes/notes/getallnotes'));
app.use('/api/notes/addnote', require('./routes/notes/addnote'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})