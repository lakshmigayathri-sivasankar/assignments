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
const numbers = [15.5, 2.3, 1.1, 4.7];
console.log(numbers.reduce(getSum, 0));
function getSum(total, num) {
  return total + Math.round(num);
}

let clothes = new Map([
  ["tops", 450],
  [" sarees", 900],
  [" kurti", 500],
]);
let each = "";
clothes.forEach(function (value, key) {
  each += key + " = " + value + "";
});
console.log(each);

let cookies = new Map();
cookies.set("chocolate-chip", 200);
cookies.set("unibic", 100);
cookies.set("unibic", 20);
console.log(cookies.get("unibic"));

const counting = new Map([
  ["wsed", 5],
  ["mon", 7],
]);
counting.delete("wsed", 5);
counting.clear();
console.log(counting.size);

const furniture = new Map([
  ["sofa", 10000],
  ["chair", 3000],
  ["table", 1000],
]);
let Amt = 0;
for (const d of furniture.values()) {
  Amt += d;
}
console.log(Amt);
