let data="Since we want to create another array"

let reverseData=data.split(" ").map(val=>val.split("").reverse().join(""))
console.log(reverseData)


let val=[1,2,3,4,5,6]

// for(let i=val.length-1;i>=0;i--){
//   let test=val.pop()
// console.log(val)
// // val.splice(i,1)
// // console.log(val);
// }


let final=val.filter(val=>val>4)
console.log(final)

let dat=final.reduce((acc,l)=>acc+l)
console.log(dat)

console.log(final
  )
console.log(val)

console.log(typeof typeof null)



let arr = [
  [1, 2],
  [3, 4],
  [5, 6][7, 8, 9],
  [10, 11, 12, 13, 14, 15]
];

let val2=arr.flat(2)
console.log(val2)