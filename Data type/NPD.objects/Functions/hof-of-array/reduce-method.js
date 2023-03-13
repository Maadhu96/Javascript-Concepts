// Reduce method
// for addition initial value is 0
// for multiple initial value is 1
let a = [1, 2, 3, 4]

let r = a.reduce((acc, l)=> {
    return acc + l;
},1)
console.log(r);

// ========================
let items = [100, 200, 300, 400]
// here we mapping the items means adding the value
let mappingitem = items.map(m => m + 10)
console.log(mappingitem);
// filter the items
let filteritems = mappingitem.filter(f => f > 210)
console.log(filteritems);

// reduce method means adding the value and reduce the length of the array

let filteritemreduce = filteritems.reduce((acc, l) => { return acc + l });
console.log(filteritemreduce);

