const express = require('express')
const app = express()
const port = 3000
const orders = require('./routes/orders');
// const db = require('./db');
const path = __dirname + '/views/';

app.use(express.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));
app.use('/orders', orders);

app.get('/', (req, res) => {
  res.send('home')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})