//Not to declare like this..
//<!-- const 123 = "Hello"; console.log("message::",123); let let = "Hi";-->
//double quotes, Single quotes//
let name_0 = "'gayu'";
console.log("name::", name_0);
//add//
let fname = "lakshmi";
let lname = "gayathri";
let fullname = fname + " || " + lname;
console.log("myname::", fullname);
let myname = "Gayathri";
console.log("myself::", fullname);

const name0 = "AAA";
const greet = `bbb`;
const name_1 = "zzz";
console.log(greet + "" + name0 + "" + name_1);

let my = "hello";
console.log(typeof ("mess::", my));
//concatenation
let Name1 = "id";
let Name2 = "ly";
let messge = Name1.concat(Name2);
console.log(messge);

//undefined//
let x1;
console.log(typeof ("value::", x1));

let z;
console.log(z);

let y = "4";
console.log(typeof ("number::", y));
//using dollar undescore//
const my_favt = "vjy";
console.log("favourite::", my_favt);

let $name = "lakshmi";
console.log("Name::", $name);
//object//
let $drinks = { brand: "pepsi", year: "2022", healthy: "false" };
console.log("people::", $drinks);

console.log(student);
let person = {};
let student = {
  Rollno: 12345,
  fname: "DDDD",
  lname: "`LLLL`",
};
//number//
let g = 3.14;
console.log("value::", g);

let number1 = 40;
console.log("answer::", number1);

let lgs = 20 + 4;
console.log("myself::", lgs);

let number = lgs + g;
console.log("myselfs::", number);

let x = 5;
x = 13;
console.log(x);

let num = number + 50;
console.log("my_self::", num);

const number6 = 3e5;
console.log(number6);

let number7 = "AAAA" / 3;
console.log(number7);
//using concatenate//
let name1 = "Text";
let name2 = "area";
let name3 = name1.concat("", name2);
console.log("mode::", name3);

const $1 = "4";
console.log("number::", $1);

let chocolates = ["45", "dairy milk", "7"];
console.log(chocolates);
chocolates[4] = "roastalmond";
//function//
function subtraction(num_1, num_2) {
  console.log(num_1 - num_2);
}
let process = function () {};
console.log(typeof ("function::", process));

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

function addition(text1, text2) {
  console.log(text1 + text2);
}
addition(40, 34);

// string//
subtraction(40, 16);
let message = 'sample ~ "quotes" ';
console.log(message);

const msge = "\\this is the `backtick | backslash`";
console.log(msge);

let txt = "shall we calculate the length";
console.log("text::", txt.length);

let text = "123456789";
console.log("text::", text.length);

let str = ("furniture", "dinningtable");
console.log("string::", str.slice(7, 10));

let $name2 = "'AAAAAAAAA'";
let $name3 = '"BBBBBBB"';
let result = `The & name ~ is ${$name2} and ${$name3}`;
console.log(result);

let msg = "gay3";
let msg_2 = "it'smee";
let add = "msg" + "||" + "msg_2";
let add1 = "gaya3" + "it`smee";
console.log("message::", msg + msg_2);
console.log("msg::", add1.length);
console.log("message::", add.length);
//Array//
let vegetabes = ["tomato", "potato", "brinjal"];
vegetabes[2] = "Orange";
console.log("veg::", vegetabes);

let dress = new Array("kurti", "frock", "chudis");
console.log("dres::", dress);

let icecream = ["vanilla", "butterskotch", "choco-bar"];
console.log("icecream::", icecream);

let numbr = ["1,2,3,4"];
console.log(typeof ("number::", numbr));

let FRUITS = ["mango", "grapes"];
console.log("myfavourite::", FRUITS);

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
//Boolean//
let hello = true;
let hi = false;
console.log(typeof ("message::", hello));

let HTML = true;
let CSS = false;
console.log(typeof ("answer::", HTML));
//alert//
let heading = "Javascript";
let paragraph = "it is programming language";
alert(paragraph);
console.log("display::", heading);
console.log("message::", paragraph);
//operators
function func2() {}
let a, b, c;
a = 5;
b = 6;
c = a + b;
console.log(c);

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
