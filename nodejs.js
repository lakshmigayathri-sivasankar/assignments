var getUserSync = require("./getUserSync");

var user1 = getUserSync("123");
console.log("user1", user1);

var user2 = getUserSync("321");
console.log("user2", user2);

var sum = 1 + 2;
console.log("The sum is" + sum);

///////////////////////////////////////

var getUser = require("./getUser");

getUser("123", function (user1) {
  console.log("user1", user1);
});

getUser("321", function (user2) {
  console.log("user2", user2);
});

var sum = 1 + 2;
console.log("The sum is" + sum);

//Inserting documents db.collection.insert(): Using insert you can either insert one document or array of documents
//using pretty to built the Json format like one by one
db.profile.find().pretty();

//we can create a Id "id":1,
db.employees.insert({ empId: 3, name: "mark", dept: "B.E" });

//we can count
db.profile.find().count();

//db.collection.insertOne(): Inserts one document
db.profile.insertOne({ Name: "Ben", City: "uih" });

db.employees.insertOne({ empId: 4, name: "Tom", dept: "Accounting" });

//db.collection.insertMany: Inserts multiple documents
db.profile.insertMany([{}], [{}], [{}], [{}][{}][{}]);
//two datas will be inserted.

db.employees.insertMany([
  { empId: 1, name: "David", dept: "b.sc" },
  { empId: 2, name: "mike", dept: "Accounting" },
]);

//Updating documents db.collection.update() : Updates one or more than one document(s) in collection based on matching document and based on multi option

db.employees.update({ empId: 3 }, { $set: { region: "Mumbai" } });

//db.collection.updateOne() : Updates a single document in collection based on matching document

db.employees.updateOne({ empId: 2 }, { $set: { region: "ohio" } });

//db.collection.updateMany() : Updates multiple documents in collection based on the condition.

db.employees.updateMany({ dept: "Sales" }, { $set: { region: "Uk" } });

//Deleting documents db.collection.deleteOne(<filter>, <options>): Deletes a Single document from collection
db.profile.deleteOne({ Name: "Marry" });

db.employees.deleteOne({ empId: 1 });

//db.collection.deleteMany(<filter>, <options>): Deletes all documents with matching filter

db.employees.deleteMany({ dept: "Sales" });

//Using find to get the details

db.profile.find({ Name: "Ben" }).pretty();
//the details will be shown.

//Relational operations like greater than, less than,
db.profile.find({ Age: { $gt: 38 } }).pretty(); //gte greaterthan or greaterthanequal
db.profile.find({ Age: { $lt: 38 } }).pretty(); //lte lessthan or lessthanequal
db.profile.find({ Age: { $eq: 38 } }).pretty(); //equal

db.profile.update({ Name: "Ben" }, { $set: { city: "UK" } }); //updation or edit

// logical operator and or not equal....
db.profile.find({ $and: [{ Name: "John" }, { Age: 25 }] }).pretty();
//the output will dislay
db.profile.find({ $or: [{ Name: "Jon" }, { Age: 25 }] }).pretty();

db.profile.find({ Name: { $in: ["John"] } }).pretty();

//db.profile.find({$or:[{Name:"John","Ben"},{Age:25}]}).pretty()

//db.profile.find({$nin:[{Name:"John","Bn"},{Age:25}]}).pretty()

db.profile.find({ Age: { $not: { $lt: 25 } } }).pretty(); //=> notless than
//sort
db.profile.find().sort({ Age: 1 }).pretty; //=> sort by  => -1 descending

db.profile.find({ Name: "Ben" }).pretty();

//db.profile.find({Name:"Ben",{"City:1,","_id"}}).pretty()

//remove
db.profile.remove({ Name: "Marry" });
//remove all the data.
db.profile.remove({ Name: "Marry" }, 1);
//remove the first data.
