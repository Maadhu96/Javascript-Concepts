// filter method


// function hof(arr, cb) {
//     let filteritem = []
//     for (i = 0; i < arr.length; i++){
//         if (cb(arr[i])){
//             filteritem.push(arr[i])
//     }
//     console.log(filteritem);
// }
// hof([50, 80, 60, 200, 150], (val) => { return val > 60 })

// ===============================================

// add 18% gst and filter above 200
let m1 = [150, 110, 180, 250, 650, 2540]

// let v = m1.map(val => { return val+(val*0.18)})
let v = m1.map(x => x * 1.2);
console.log(v);
// =========
console.log(v.filter(y => y > 200));
res = v.filter(y => y > 200);
console.log(res.reduce((a,b)=>{return a*b}));//reduce method is used to do the add,sub,multiplication,division

//========================
function price(a,xy) {
   let filterprice1 = []
    for (i = 0; i < a.length;i++){
        if (xy(a[i])) {
          filterprice1.push(a[i])
        }
    }
 console.log(filterprice1);
}
price([150, 110, 180, 250, 600, 650, 2540], (val) => { return val > 200 });




// grid area
// display flex
// animation
// transistion
// transform
