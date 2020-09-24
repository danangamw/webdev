const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('<h1>Hello, Node!</h1>');
});

app.get('/home', (req,res) => {
  res.send('Its Home page');
});

app.get('/about', (req, res) => {
  res.send('Hello Im danang');
});

// Setting up port
const port = 3000
app.listen(port, () => console.log(`Server started on port ${port}`));

