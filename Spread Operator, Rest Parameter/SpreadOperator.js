
// ===================================================
// Spread Operator
// Array Destructuring
let demo = [10, 20, 30, 40, 50]
let [...o] = demo
console.log(Array.isArray(demo));
console.log(o)//there is no change in o/p. it is just tell we can sperad the array
console.log(demo)
console.log(Array.isArray(o))
// // Object Destructuring

// let { ...y }= demo
// console.log(y);

// ex1================
let arr = [10, 20, 30, 40];
let [a, b, ...c] = arr;
// destructuring: we can use only one restParameter that should be at end (ex:let [a, b, ...c] = arr;)
console.log(a);
console.log(b);
console.log(c);

let { x, y, ...z } = arr;
console.log(x); //Undefined: We can not use rest-Parameter morethan one
console.log(y); //Undefined: We can not use rest-Parameter morethan one
console.log(z);//We get both index&Value o/p {0: 10, 1: 20, 2: 30, 3: 40}
// =======================================================
let { ...p } = arr;
// destructuring
console.log(p);//o/p {0: 10, 1: 20, 2: 30, 3: 40} key=index,value=value
// =======================================================
// joining 2 array
let arr1 = [10, 20, 30, 40];
let arr2 = [100, 200, 300, 400]; 
// 1st method using concat
console.log(arr1.concat(arr2));//o/p (8) [10, 20, 30, 40, 100, 200, 300, 400]
console.log(arr1 + arr2); //Not prefered = o/p

// 2nd method is using Spread operator
console.log(...arr1, ...arr2); //

// =========================================================
// Interview question
let num = "123";
let [...u] = num; // by using the spread operator we get in array
console.log(u);
// By using Map()
console.log(
  u
    .map(m => parseInt(m))
    .reduce((acc, lv) => {
      return acc + lv;
    })
);
// By using split()
let s = num.split("");
console.log(s);
console.log(s.map(m => parseInt(m)).reduce((acc, lv) => acc + lv));


// example 2: add 12345 and result=15

let n = '12345abc'
let m = n.split("")
console.log(m)
let k = m.splice(0,5)
console.log(k)

let l = k.map(val => parseInt(val)).reduce((acc, lv )=> acc + lv)
console.log(l)
// ======================================
let n1='12453795advghjjv'
let m1 = parseInt(n1);
let sum = 0;
while (m1 > 0) {
  sum += m1 % 10;
  m1=parseInt(m1/10)
}
console.log(sum)

