const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useUnifiedTopology: true, useNewUrlParser: true});


const fruitSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String

})

const Fruit = mongoose.model("Fruit", fruitSchema);

// const kiwi = new Fruit({

//   name: "Kiwi",
//   rating: 10,
//   review: "Da Best Fruit"

// });

// const orange = new Fruit({

//   name: "Orange",
//   rating: 4,
//   review: "meh.. it's sour.."

// });

// const banana = new Fruit({

//   name: "Banana",
//   rating: 10,
//   review: "Bananaaaaa!!!"

// });

// Fruit.insertMany([kiwi, orange, banana]), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits!");
//   }
// }

const bapple = new Fruit({

  name: "Bapple",
  score: 7,
  review: "meh...."

});

bapple.save();

const personSchema = new mongoose.Schema({

  name: String,
  age: Number,
  favouriteFruit: fruitSchema

});

const Person = mongoose.model("Person", personSchema);

const person = new Person({

  name: "John",
  age: 37,
  favouriteFruit: bapple

})

person.save();

Fruit.find((err, fruits) => {
  if(err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);

    })
  }
});

// Fruit.updateOne({ _id: "5f3cc8306e5196174058f0d4"}, {rating: 10}, (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });

// Person.deleteMany({name:  "John"}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Document deleted!");
//   }
// })

Person.find((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(person);
  }
})
// const insertDocuments = (db, callback) => {

//   const collection = db.collection('fruits');

//   collection.insertMany([
//     {
//       name: "Apple",
//       score: 8,
//       review: "Nice Fruit"
//     },
//     {
//       name: "Orange",
//       score: 6,
//       review: "hmm... sour.."
//     },
//     {
//       name: "Banana",
//       score: 9,
//       review: "Delicious Fruit"
//     }, 

//   ], (err, result) => {

//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log(`Inserted ${result.ops.length} documents into the collections`);
//     callback(result);

//   });

// };

// const findDocuments = (db, callback) => {
  
//   const collection = db.collection('fruits');

//   collection.find({}).toArray((err, fruits) => {

//     assert.equal(err, null);
//     console.log("Found The following records");
//     console.log(fruits);
//     callback(fruits);

//   });

// }