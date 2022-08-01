//push;==> Adding in end.
let Hii = ["excuse", "me", "hi"];
Hii.push("BBBB");
console.log(Hii);

let numeral = [324, 89497, 887897];
let count = numeral.push(12345);
console.log(numeral);
console.log(count);

let num9 = [];
//pop// ==> remove in end
let Hii1 = ["vanakam", "welcome", "vandhanam"];
Hii1.pop();
console.log(Hii1);

let numbers = [
  [766, 9809, 183],
  [-123, -5437, -857],
];
numbers.pop();
console.log(numbers);
console.log(numbers.pop());
//shift// removing in first
let Hii2 = ["C", "C++", "Java"];
Hii2.shift();
console.log(Hii2);
//console.log(first);

//unshift// adding in first
let Hii3 = ["Angular", "DynamoDB", "Git"];
Hii3.unshift("JS");
console.log(Hii3);

//index of///
//let Hii4 = ["AngularJS", "MangoDB", "GitHub"];
/*Hii4.indexof("JS");
console.log(Hii4);*/

//For in//==> String
const string = `ss helo`;
for (let i in string) {
  console.log(string[i]);
}
//for in//==> array
const arr = ["Hello", 1000, "new"];
for (let z in arr) {
  console.log(arr[z]);
}
//for in//==>object//
const Student = {
  name: "kkki",
  age: 09,
  place: "vellore",
};
for (let key in Student) {
  console.log(`${key} => ${Student[key]}`);
}

//forEach//
function printElement(element, index) {
  console.log("array element" + index + ": " + element);
}
const prices = [74, 38, 383, , , 191, 37];
prices.forEach(printElement);
// for of//=> Array, String, iterabe => Array, strings, sets.
/*for (element of iterable){
}*/
const student1 = ["hhd", "bjf", "iudh", "njf", "huh"];
for (let element of student1) {
  console.log(element);
}

//for of => using map
let map = new Map();
map.set("name", "kjsnkj");
map.set("age", 243);
for (let [key, value] of map) {
  console.log(key + " - " + value);
}

//is Array//
let text1 = [1, 2, 3, 4];
console.log(Array.isArray(text1));

let txt2 = "hello";
console.log(Array.isArray(txt2));

//map//
const price1 = [10000, 40000];
let newprice1 = price1.map(Math.sqrt);
console.log(newprice1);

//reduce//
//syntax
const msg1 = ["TajMahal", " is ", "beautiful"];
function joinStrings(accumulator, currentvalue) {
  return accumulator + currentvalue;
}
let joinedStrings = msg1.reduce(joinStrings);
console.log(joinedStrings);
//filter//
/*let tables = [2, 4, 6, 3, 5, 7];
let evennumbers = [2, 4, 6, 3, 5, 7];
console.log(tables.filter);
tables(evennumbers);*/

let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(table) {
  if (table % 2 == 0) return true;
  else return false;
}
let eventable = table.filter(checkEven);
console.log(eventable);

//constructor//
let Hii5 = ["AngularJS", "MangoDB", "GitHub"];
let constructor = Hii5.constructor;
console.log(constructor);

//if less than 18 hours it display plays good day.
if (new Date().getHours() < 17) {
  console.log("Good day");
} else {
  console.log("happy happy");
}
//
const hour = new Date().getHours();
let greet1;
if (hour < 20) {
  greet1 = "Orange";
} else {
  greet1 = "Apple";
}
console.log(greet1);
//number box below, above 50
const num_3 = prompt("Number box:");
if (num_3 < 50) {
  console.log("It is a below 50");
} else {
  console.log("It is a above 50");
}
//if, else if, else
let num_4 = prompt("Execution box:");
if (num_4 < 5) {
  console.log("It is a 0 number");
} else if (num_4 < 50) {
  console.log("'Else if' is executed");
} else {
  console.log("'Else' is executed");
}
//switch
let language = 4;
switch (language) {
  case 1:
    language = "HTML";
    break;
  case 2:
    language = "CSS";
    break;
  default:
    language = "JS";
}
console.log(`That is ${language}`);
//forloop
const fruit = ["strawberry", "Apple", "orange"];
let text5 = "";
for (let i = 0; i < fruit.length; i++) {
  text5 += fruit[i] + " ";
}
console.log(text5);
//for in
const num_5 = new Array(12, 34, 56, 78);
let text3 = "";
for (d in num_5) {
  text3 += num_5[d] + " ";
}
console.log(text3);
