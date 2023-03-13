let emp = {
  eName: "swaroop",
  id: 123,
  company: "tyss",
  address: {
    city: "B lore",
    pincode: 570008,
  },
};
console.log(typeof emp);
let jsonperson = JSON.stringify(emp);
console.log(jsonperson);
console.log(typeof jsonperson);
