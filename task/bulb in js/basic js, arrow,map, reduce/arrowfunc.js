let marks = 45;
let students =
  marks < 80 ? () => console.log(`girls`) : () => console.log(`boys`);
students();

let multiple = (a, b) => a * b;
console.log(multiple(4, 5));

const multiply = (x, y) => {
  let solution = x * y;
  return solution;
};
const solution = multiply(2, 4);
console.log(solution);

let content;
content = function () {
  return "~'Without Arrow function'";
};
console.log(content());

let contnt;
diffcontent = () => {
  return "Using Arrow Function";
};
console.log(diffcontent());

let sample;
messge = () => "without brackets and keywords, (return value by default)";
msg_2 = () => ":shortform of Arrow Function";
$msg_3 = () => "[90% usage this]";
console.log(messge() + msg_2() + $msg_3());

let elements;
elements = (msg) => "WITH PARAMETERS:" + msg;
console.log("Eg::", elements("examples"));

let elemnts;
elemnts = (msg) => "WITHOUT PARAMETERS:" + msg;
console.log(typeof ("Eg::", elemnts("examples")));

const decimals = [13, 17, 19, 21];
console.log(decimals.map(Math.sqrt));

const numbers = [25, 36, 64, 81];
console.log(numbers.map(Math.sqrt));

let score = [21, 17, 91, 47];
let denoted = score.map(hello);
console.log(denoted);
function hello(alloted) {
  return alloted * 97.9;
}

let employee = new Array(
  { fname: "lakshmi", lname: "gayathri" },
  { age: "yy" }
);
console.log(employee.map(details));
function details(that) {
  return [that.fname, that.lname, that.age].join(" ");
}
//spread operator// combined without using + operator using(...)
let $numeral = [4, 8, 12, 16, 20];
let _numeral = [24, 28, 32, 36, 40];
let combination = [...$numeral, ..._numeral];
console.log(typeof combination);

const number = ["firstnumber : 3", "secondnumber : 2", "1, 3, 7"];
const [fn, ln, ...rest] = number;
console.log("" + fn + "");
console.log("" + ln + "");
console.log("" + rest + "");
///////reduce
let calc = [3000, 40.5, 26];
console.log(calc.reduce(WWW));
function WWW(num, num_1) {
  return num - num_1;
}
const add = [2.5, 3.3, 5.7, 8.9];
console.log(add.reduce(rsult, 1));
function rsult(num, num_1) {
  return num + Math.round(num_1);
}
const number_7 = [15.5, 2.3, 1.1, 4.7];
console.log(number_7.reduce(getSum, 0));
function getSum(total, num) {
  return total + Math.round(num);
}
