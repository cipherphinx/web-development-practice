//jshint esversion:6
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are so yummy."
});

// fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const grape = new Fruit({
  name: "Grape",
  rating: 9.5,
  review: "Sweet and tangy."
});

grape.save();

Person.updateOne({_id: "5d1de9f6434d7a2e4cb7e97f"}, {favouriteFruit: grape}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully updated the document.");
  };
});

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple
// });
//
// person.save();

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  };
});

// Fruit.updateOne({_id: "5d1de24e12fb683878d157a3"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   };
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the record!");
//   };
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the record!");
//   }
// })

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture"
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfuly saved all the fruits.");
//   };
// });
