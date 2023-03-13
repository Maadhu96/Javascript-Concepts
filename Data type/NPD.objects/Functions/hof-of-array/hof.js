
// higher order function
let m = [10, 20, 30, 40]

let mapped_Item = m.map(val => { return val + 10 });
console.log(mapped_Item);

let mappeditem = m.map(val => val + 5);

console.log(mappeditem);

// =---------------------------------------------

// function hof(arr, cb) {
//     console.log(arr);
//     console.log(cb);
//     let mappeditems1 = [];

//     for (let i = 0; i < arr.length; i++){
//        mappeditems1.push(cb(arr[i]));
//     }
//     return mappeditems1
// }
// console.log(
//     hof([10, 20, 30, 40], (val) => {
//         console.log(val + 50);
//         // return val + 50;
//     }));

// =---------------------------------------------

let z = ("hello")

let h = z.split("");
console.log(h);
let mappingarray=[]
function hof1(z, zx) {
    for (i = 0; i <h.length;i++){
        mappingarray.push(zx(z[i]))
    }
    return mappingarray
}
console.log(hof1(h,(val)=>{return `$`+val}));


// =--------=================================================
