const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { static } = require('express');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get('/', (req, res) => {

  let today = new Date();

  let options = { 
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);


  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday"
  //     break;
  //   case 1:
  //     day = "Monday"
  //   break;
  //   case 2:
  //     day = "Tuesday"
  //   break;
  //   case 3:
  //     day = "Wednesday"
  //   break;
  //   case 4:
  //     day = "Thursday"
  //   break;
  //   case 5:
  //     day = "Friday"
  //   break;
  //   case 6:
  //     day = "Saturday"
  //   break;
  //   default:
  //   console.log(`Error: current day is equal to: ${currentDay}`)
  // }
  

  res.render("index", {
    listTitle: day,
    newListItems: items
  });


});

app.post("/", (req, res) => {
  
  let item = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", (req,res) => {

  res.render("index", {listTitle: "Work List", newListItems: workItems});

});

app.get("/about", (req, res) => {

  res.render("about");

});

app.listen(3000, () => console.log('Server start at port 3000'));
