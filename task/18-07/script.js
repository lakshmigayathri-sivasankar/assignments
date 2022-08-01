async function f() {
  console.log("bbb.");
  return Promise.resolve(1);
}

f().then(function (result) {
  console.log(result);
});

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 1000);
});

// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;

  console.log(result);
  console.log("hello");
}

let length = 16; // Number
let lastName = "Johnson"; // String
let k = { firstName: "John", lastName: "Doe" };
console.log(k);

let name = "JavaScript";
strg1 = name + " String";
console.log(strg1);

let counter = 120;
console.log(typeof counter);

let five = null; //sir
console.log(typeof five);

let resul = "d" < "e";
console.log(resul);

let z = Boolean("Hi"); //sir
console.log(z);

let person = { firstName: "John", lastName: "Doe" };
console.log(person["firstName"]);
console.log(person["lastName"]);

let list = { firstName: "John", lastName: "Doe" };
list.firstName = "Jane";
console.log(list);

let employee = { firstName: "Peter", lastName: "Doe", employeeId: 1 }; //sir
console.log(employee["lastName"]);
console.log("employeeId" in employee);

let person1 = {
  name: "yuva",
  age: 22,
  team: "devops",
  isAlive: true,
  address: "vellore,india",
  siblings: {
    brother: "aaa",
    sister: "bbb",
    uncle: "ccc",
    parent: {
      father: "ddd",
      mother: "eee",
    },
  },
};
console.log(person1);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return firstName + " " + this.lastName; //sir
  },
};

console.log(person2);

function greetuser(firstname, lastname) {
  //let lastname="vvv";
  let msg = "hello" + firstname + "is" + lastname;

  console.log(msg);
}
greetuser("idbif", "biadb");

let w = myFunction(6, 9);

function myFunction(a, b) {
  return a * b;
}
console.log(w);

let str = "Apple, Banana, Kiwi";
let part = str.slice(2, 13);

console.log(part);

const msg = "tajmahal is wonderful";
let count = msg.substring(10, 0);
console.log(count);

const text = "ball. bat";
const pattern = /a/g;
const new_text = text.replace(pattern, "J");

console.log(new_text);

sentence = "tajmahal is to wonder what Car is to Carpet.";

let check = sentence.startsWith("tajmahal");
console.log(check);
let check1 = sentence.startsWith("tajmahal is");
console.log(check1);
let check2 = sentence.startsWith(" to wonder");
console.log(check2);
let check3 = sentence.endsWith("Carpet.");
console.log(check3);

let str1 = "Hello hii!";
let txt = "software developer.";
let uppercase_str1 = str1.toUpperCase();
console.log(uppercase_str1);
let Lowercase_txt = txt.toLowerCase();
console.log(Lowercase_txt);

const holiday = "Happy holiday!";
const list1 = holiday.repeat(3);
console.log(list1);

const string = "Hello World";
let result1 = string.charAt(6.3);
console.log("Character at index 6.3 is " + result1);
let result2 = string.charAt(6.9);
console.log("Character at index 6.9 is " + result2);
let result3 = string.charAt(6);
console.log("Character at index 6 is " + result3);

const mssg = "nature is best place.";
const exp = /is/;
let value = mssg.match(exp); //sir
console.log(value);

let string8 = "world wide technology.";
let index = string8.search("wide");

console.log(index);

const msage = "month::of::july";
let result7 = msage.split("::");
console.log(result7);

let str3 = "   april  ";
console.log(str3.trim());

////////////////////////////////////
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(10);

console.log(x.toExponential(10));

let colorslist = ["green", "white", "pink", "red", "black", "blue", "rose"];
colorslist.length = 5;
console.log(colorslist);

let number = ["8", "4", "7", "1", "0", "7"];
let reversedarray = number.reverse();
console.log(reversedarray);

let districts = ["pune", "goa", "kerala", "ooty", "korea"];
let reversed_array = [...districts].reverse();
//let reversed_array=districts.reverse();
console.log("reversed_array: ", reversed_array);
console.log("original array: ", districts);

let names = ["yyy", "bbb", "aaa", "fff", "ddd"];
console.log(names.sort());

let names1 = ["yellow", "bats", "adam", "fishing", "dog"];
function len_compare(a, b) {
  return a.length - b.length;
}
names1.sort(len_compare);
console.log(names1);

let number1 = ["8", "4", "7", "1", "0", "7"];
number1.sort(function (a, b) {
  return a - b;
});
console.log(number1);

console.log("Ascending -" + number1);
number1.sort((a, b) => b - a);
console.log("descending -" + number1);

let para = [`life`, `is`, `a`, `journey`];
let joinedpara = para.join(``);
console.log(joinedpara);

let info = ["india", 27, "america"];
let info_str = info.join("|");
console.log(info);
console.log(info_str);

let items = ["python", 3, "b", 9];
let itemsstring = items.toString();

console.log(itemsstring);
//using reduce to space.
const words = ["month", "of", "july"];
function joinStrings(value1, value2, value3, value4) {
  return value1 + value2 + value3 + value4;
}
let joinedString = words.reduce(joinStrings);
console.log(joinedString);
////////////////////////////////////////////////
const numbers = [11, 22, 88, 77, 89];
function sum_reducer(accumulator, currentvalue) {
  return accumulator + currentvalue;
}
let sum = numbers.reduce(sum_reducer);
console.log(sum);
let summation = numbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue
);

console.log(summation);
///////////////////////////////////////////////
const number0 = [1500, 41, 663, 96, 500];
let difference = number0.reduce(
  (accumulator, currentvalue) => accumulator - currentvalue
);

console.log(difference);
////////////////////////////////////////////////////////
const number8 = [12, 23, 34, 45, 56];
let sum1 = number8.reduce((value5, value6) => value5 + value6);
console.log(sum1);
//////////////////////////////////////////////
const expenses = [1500, 41, 663, 96, 500];
const salary = 1000;
let remaining = expenses.reduce(
  (accumulator, currentvalue) => accumulator - currentvalue,
  salary
);

console.log(remaining);
//////////////////////////////////////////////////sir
let number6 = [1, 8, 4, 7, 9, 2];
function checkodd(number) {
  if (number % 2 == 0) return true;
  else return false;
}
let evennumber6 = number6.filter(checkodd);

console.log(evennumber6);
///////////////////////////////////////////////sir
let fruits = ["apple", "banana", "grapes", "mango", "orange"];
function filter1(arr, query) {
  return arr.filter(function (el) {
    return el.toUpperCase().indexOf(query.toUpperCase()) !== -1;
  });
}

console.log(filter1(fruits, "ap"));
console.log(filter1(fruits, "an"));

//array map//sir
let number7 = [1, 4, 9];
function square(number, no) {
  return number * number, no * no;
}

let square_number7 = number7.map(square);
console.log(square_number7);

const string1 = "JavaScript";
const stringArr = string1.split("");
let asciiArr = stringArr.map((x) => x.charCodeAt(0));

console.log(stringArr);
console.log(asciiArr);

const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);

console.log(map1);

const strings = [1002, 100, 1000];
const number9 = strings.map(parseInt);

console.log(number9);

let students = ["Jjjjjj", "vvv", "kkkk"];
students.forEach(myFunction);
function myFunction(item) {
  console.log(item);
}

const student1 = ["John", "Sara", "Jack"];

student1.forEach((element) => {
  console.log(element);
});
//////////
const arrayItems = ["item1", "item2", "item3"];
const copyItems = [];
for (let i = 1; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);

const set = new Set([8, 9, 10]); //sir
set.forEach(myFunction);
function myFunction(item) {
  console.log(item);
}

let map = new Map();
map.set("name", "Jack");
map.set("age", "27");
map.forEach(myFunction);

function myFunction(value, key) {
  console.log(key + " - " + value);
}

//////////////////////////////
let emptyArray = [];
console.log(emptyArray.length);

let languages = ["Js", "Python", "C", "ruby", "Lua"];
for (i = 2; i < languages.length; i++) {
  console.log(languages[i]);
}
/////////////////////////////
let cities = ["Madrid", "us", "china", "Paris"];
let removedCity = cities.pop();

console.log(cities);
console.log(removedCity);

const string5 = "code";
for (let i in string5) {
  console.log(string5[i]);
}

const arr = ["hii"];
for (let x in arr) {
  console.log(arr[x]);
}

const students1 = ["John", "Sara", "Jack"];
for (let element of students1) {
  console.log(element);
}
let txt10 = 'We are "vikings"';
alert(txt10);

const fruits1 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits1.splice(1, 2);
console.log(fruits1);
///date in alert//
const d = new Date();
alert(d);
year = d.getFullYear();
///date//
const y = new Date();
console.log(y);
///year in alert//
let w1 = new Date();
year = w1.getFullYear();
alert(year);
///year//
const t = new Date();
year = t.getFullYear();
console.log(year);
///date + year//
const e = new Date();
year = e.getFullYear();
console.log(year);
console.log(e);
///month normal and alert//
const l = new Date();
month = l.getMonth();
console.log(month);
alert(month);
///set a correct things//
const p = new Date();
correct = p.setFullYear(2022);
console.log(correct);
/////
//random//
let r = Math.random();
console.log(r);
//max//
let b = Math.max(10, 20);
console.log(b);
//min//
let c = Math.min(96, 5);
console.log(c);
//round//
let h = Math.round(9.9);
console.log(h);
//sqrt//
let n = Math.sqrt(1000);
console.log(n);
//greater than..
const x2 = 10;
const y2 = 5;
result = x2 > y2;
console.log(result);
//less than//
const x3 = 4;
const y3 = 4;
result = x3 == y3;
console.log(result);

const x4 = 10;
const y4 = 5;
result = x4 > y4;
console.log(result);

const x5 = 10;
const y5 = 5;
result = x5 != y5;
console.log(result);

/*const x2 = 10;
const y2 = 5;
result = x2 > y2;
console.log(result);

const x2 = 10;
const y2 = 5;
result = x2 > y2;
console.log(result);*/

var age = 19;
var voteable = age < 18 ? "Too young" : "Old enough";
alert(voteable);
