function hello() {
  console.log("Is that function working");
}
hello();
//=>node pckage manager npm
(function hello1() {
  console.log("Another method to run a function without calling method");
})();
////Using Local module///export
function hello2() {
  console.log("Using Node to export & import from one to another");
}
module.exports = hello2;
//multiple modules
function hello3() {
  console.log("MODULES");
}
let a = "Multiplemodules";

module.exports.hello3 = hello3;
module.exports.a = a;

//

module.exports.func = function hello4() {
  console.log("MODULES");
};
module.exports.num = b = ["easy to call", 5165];
//
/*func = function myfunc() {
  console.log("object types to calling");
};
num = c = 34525;

module.exports = {
  func: func,
  num: num,
  dummy: () => {
    {
      console.log("dummy functiom");
    }
  },
};
*/
class firstclass {
  constructor(name) {
    this.name = name;
  }
  func() {
    console.log("This is my first class " + this.name);
  }
}
module.exports.firstclass = firstclass;

class scndclass {
  constructor(name1) {
    this.name1 = name1;
  }
  func1() {
    console.log("The answer is " + this.name1);
  }
}
module.exports.scndclass = scndclass;
