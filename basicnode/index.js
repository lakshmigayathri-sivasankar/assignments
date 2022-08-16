let x = 484884;
console.log(x);
//Local module => //imported //import hello2 from './one';
const hello2 = require("./local");
hello2();

//

const global = require("./local");
global.hello3();
console.log(global.a);

//

const global1 = require("./local");
global1.func();
console.log(global1.num);

///

/*const global2 = require("./one");
global2.func();
console.log(global2.num);
global2.dummy();*/

//ThirdParty module => npm using cli to  inherit the => nodemon install best package. =>node pckage manager npm install nodemon

const check = require("./local");
let obj = new check.firstclass("lakshmi");
obj.func();

const check1 = require("./local");
let obj1 = new check1.scndclass(2 * 4);
obj1.func1();

//Core modeule =>

const readline = require("readline"); //=> user kitta value vangi output la show panlam like console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("what is your strength!", (ans) => {
  console.log("My skill is " + ans);
  rl.close();
});

// the output is what i expect is shown.

const readline = require("readline"); //=> user kitta value vangi output la show panlam like console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("what is your Name?", (ans) => {
  if (ans === "John") {
    rl.close();
  } else {
    rl.setPrompt("wrong value 'TRY AGAIN' \n"); //using setprompt to speak
    rl.Prompt();
    rl.on("line", (inp) => {
      // using callback fucntion
      if (inp === "John") {
        rl.close();
      } else {
        rl.setPrompt(inp + " wrong \n");
        rl.prompt();
      }
    });
  }
});
rl.on("close", () => {
  console.log("correct !!!");
});

let readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.information("What is your age?", (details) => {
  if (details === 70) {
    rl.close();
  } else {
    rl.setPrompt("below 50 years could be accepted \n");
    rl.prompt();
    rl.on("pause", (inp) => {
      if (inp === 40) {
        rl.close();
      } else {
        setPrompt(out + "wromg \n");
        rl.prompt();
      }
    });
  }
});

//const readline = require("readline");
//addlistener or "on" we can use both

const events = require("events");

const myEmitter = new events.EventEmitter();
myEmitter.addListener("newlistener", () => {
  console.log("After 5 sec i'll show");
});
setTimeout(() => {
  myEmitter.emit("newlistener");
}, 5000);

const events = require("events");
const myEmitter1 = new events.EventEmitter();
let a = ["maha", "lakshmi", "gayathri"];
myEmitter1.addListener("newlist", () => {
  for (let x = 0; x < a.length; x++) {
    //Array.length
    //const element = array[i];
    console.log(x + "  " + a[x]);
  }
  console.log("using loop i'll be there");
});
setTimeout(() => {
  myEmitter1.emit("newlist");
}, 5000);

const events = require("events");
const myEmitter1 = new events.EventEmitter();
let a = ["maha", "lakshmi", "gayathri"];
myEmitter1.on("newlist", () => {
  for (let i = 0; i < a.length; i++) {
    //Array.length
    //const element = array[i];
    console.log(i + "  " + a[i]);
  }
  console.log("using loop i'll be there");
});
setTimeout(() => {
  myEmitter1.emit("newlist");
}, 5000);

const crypto = require("crypto");
const sec = "secretkey";
const hash = crypto
  .createHmac("sha256", sec)
  .update("Replaced word")
  .digest("hex");
console.log(hash);

const rl = require("readline");
rl.question("what is your Name?", (ans) => {
  const hash = crypto.createHmac("sha256", sec).update(ans).digest("hex");
  console.log(hash);
  rl.close();
});
rl.on("close", () => {
  console.log("encryptd name!");
});
