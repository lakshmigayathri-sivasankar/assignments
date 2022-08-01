let map4 = new Map();
map4.set((text = { Brand: "pepsi", qty: "good" }));
console.log(map4.get("Brand"));

//forEach//
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

//delete,clear//
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
