//constructor
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
const data = new myself("mirunalini", 36);
console.log(data.person + " " + data.age() + " " + data.person1);

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

//class//
class myself {
  constructor(name, year) {
    this.person = name;
    this.person1 = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.person1;
  }
}
const biodata1 = new myself("mirunalini", 36);
console.log(biodata1.person + " " + biodata1.age() + " " + biodata1.person1);

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
const $data = new self("mirunalini", 36);
console.log($data.person + " " + $data.age() + " " + $data.person1);
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