const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) => {

  let crypto = req.body.crypto;
  let fiat = req.body.fiat;
  let amount = req.body.amount;

  let options = {
    url: "https://apiv2.bitcoinaverage.com/indices/global",
    method: "GET",
    qs: {
      from: crypto,
      to: fiat,
      amount: amount
    }
  };

  request(options, (error, response, body) => {

    let data = JSON.parse(body);
    let price = data.price;

    console.log(price);

  });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});