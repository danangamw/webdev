const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send(`The result is ${result}`);
});

app.get('/bmi', (req,res) =>{
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmi', (req,res) => {
  
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  
  let bmi = Math.floor(weight / (height * height));

  if (bmi > 19 && bmi < 25) {
    res.send(`Your BMI is ${bmi} and it is ideal`);
  } else if (bmi < 19) {
    res.send(`Your BMI is ${bmi}, you lack of weight`);
  } else if (bmi > 25 && bmi < 30) {
    res.send(`Your BMI is ${bmi}, you got excess weight`);
  } else {
    res.send(`Your BMI is ${bmi} and its obesity`);
  }

});

const port = 3010;
app.listen(port, () => console.log(`Your server started on port ${port}`));
