let fruites = ["Apple", "Kiwi", "Orange"];

console.log(fruites.indexOf("Kiwi"));
// console.log(fruites.slice(1, 2));
// console.log(fruites.splice(1, 1));

// for of

for (let values of fruites) {
  console.log(values);
}

// for in
for (let values in fruites) {
  console.log(values);
}
// for each
// In forEach first value always value nxt value is index.

fruites.forEach((value, index) => {
  console.log(value);
});
// =====================
fruites.forEach((index, value) => {
  console.log(index,value);
});
// ===============================
// difference between map and foreach method
// If we use return keyword in map we will get the array as output
// if we use return keyword in forEach we will get the "undefined" as a output because in forloop return keyword ends the iteration.

let map = fruites.map(items => {
  console.log(items);
  return items;
});
console.log(map);

let forEachex = fruites.forEach(val => {
  console.log(val);
  return val;
});
// forEachex()
console.log(forEachex);
