let number = 40;
console.log("answer::", number);

const name0 = "AAA";
const greet = `bbb`;
const name1 = "zzz";
console.log(greet + "" + name0 + "" + name1);

let x = 5;
x = 13;
console.log(x);
//undefined//
let z;
console.log(z);
//null//
//object//=> Collection of data.
let student = {
  Rollno: 12345,
  fname: "DDDD",
  lname: "`LLLL`",
};
console.log(student);
let person = {};
//string//
let name2 = "'AAAAAAAAA'";
let name3 = '"BBBBBBB"';
let result = `The & name ~ is ${name2} and ${name3}`;
console.log(result);
//boolean//
let HTML = true;
let CSS = false;
console.log(typeof ("answer::", HTML));
//number//
const number6 = 3e5;
console.log(number6);

let number7 = "AAAA" / 3;
console.log(number7);
//Array//

//function//
/*let Students = {
  Name: "djj",
  Id: 1234,
};
Students.greet = function () {
  console.log("Students");
};*/

let Students = {
  greet: function () {
    console.log(`The name is` + "" + this.Name);
  },
};
Students.greet();

function name4() {
  (this.Name = "FFFF"), (this.Id = 6789);
}
console.log(name4);

let sample = function () {
  (Name = " djj"), (age = 1234);
};
console.log("result::", sample);

let process = function () {};
console.log("function::", process);

function addition(text1, text2) {
  console.log(text1 + text2);
}
addition(40, 34);

function subtraction(num_1, num_2) {
  console.log(num_1 - num_2);
}
subtraction(40, 16);
//Array//==> length,
let Hello = ["all", "the", "best"];
let length = Hello;
console.log(length);

let Helo = ["best", "of", "luck"];
console.log(Helo.length);

let Text = [];
console.log(Text.length);

let Hi = ["this is ", "what i", "expect"];
for (i = 1; i < Hi.length; i++) {
  console.log(Hi[i]);
}

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
//let first = Hii2.shift();
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

//constructor//
let Hii5 = ["AngularJS", "MangoDB", "GitHub"];
let constructor = Hii5.constructor;
console.log(constructor);
//concatenation//
let Name1 = "id";
let Name2 = "ly";
let messge = Name1.concat(Name2);
console.log(messge);

let name11 = "Text";
let name12 = "area";
let name13 = name11 + name12;
let name14 = name11.concat(name13);
console.log("mode::", name13);
console.log("mode1::", name14);

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

////Set Timeout///==> Eg
//function,millisecond
function gret() {
  console.log("dnijfn");
}
setTimeout(gret, 3000);
console.log("this message shows");
//setinterval//==> Eg
function greet1() {
  console.log("Welcome");
}
setInterval(greet1, 10);
//Js callback//
function greet2(name, callback) {
  console.log("Hii" + "" + name);
  callback();
}
function callMe() {
  console.log("hyhuhi");
}
greet2("valueforcall", callMe);

//async await//
async function f() {
  console.log("purpose");
  return Promise.resolve(1);
}
f().then(function (result) {
  console.log(result);
});
//await//==>eg
async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    reject("welcome Home");
  });
  console.log(await myPromise);
}
myDisplay();
//classes// ==> Syntax
class mysef {
  constructor() {
    25;
  }
}
//Eg//
class myself {
  constructor(name, age) {
    this.person = name;
    this.person1 = age;
  }
}
const biodata = new myself("Shalini", 26);
console.log(biodata.person + " " + biodata.person1);
//added year
class mine {
  constructor(name, age) {
    this.person = name;
    this.person1 = age;
  }
  year() {
    this.person2 = year;
  }
}
const bidata = new mine("Varun", 1940, 62);
console.log(bidata.person + bidata.person2 + bidata.person1);
///methods///
class self {
  constructor(name, year) {
    this.person = name;
    this.person1 = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.person1;
  }
}
const data = new self("mirunalini", 36);
console.log(data.person + " " + data.age() + " " + data.person1);
//call method
class fav1 {
  constructor(drinks, cookies){
    this.liquid = drinks;
    this.solid = cookies;
  }
  age(x){
    return x - this.year;
  }
}
let data1 = new fav1 =("pepsi","Goodday");
let date = new Date();
let year = date.getFullYear();
console.log(data1.age(year));
//
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date1 = new Date();
let year1 = date.getFullYear();

