// Array will take both ho,homogeneous and hetirogeneous
let arr = [1, "Hi", () => {}, {}, true, null, undefined];
console.log(arr);

// If we want to create a new arry we should use this keyword and Array constructor
let arr1 = new Array(1, 2, 3);
console.log(arr1);

// To check the length of the array
console.log(arr1.length);

// it will  give the index value as a output
let c = [10, 22, 35, 55, 85];
console.log(c[2]);
console.log(c[4]);

// Array inbuild methods
// =================================================================================

// pop methods:It will remove the values/items present at the last position

let arrpop = [10, "Hi", 20, "Hello"];
console.log(arrpop.pop());
// If you use the pop method it will affect the main array
console.log(arrpop);

// we can empty an array by using pop()
arrpop.pop(); // it will delete the last value
arrpop.pop();
arrpop.pop();
console.log(arrpop);
// =================================================================================

// Push-method:Push method is used to push the value at the last of the array

let arrpush = [10, "Hi", 20, "Hello"];
arrpush.push(25); // if we are not passing the value it doesn't consider the empty space.
console.log(arrpush); //o/p: [10,"Hi,20,"Hello,25]
arrpush.push(25, "Hey Man");
console.log(arrpush); //o/p: [10,"Hi,20,"Hello,25]

// Note: Push is a method that takes arrguments (values) which will be add in the last position of an array this method is also  effect the original array. we can push (add) multiple values.

// =================================================================================

// shift method:
// It will remove the values / items present at the first position
let arrshift = [10, 20, 30, "hello"];
arrshift.shift();
// If you use the shift method it will affect the main array
console.log(arrshift);
arrshift.shift();
console.log(arrshift);
// =================================================================================

// unshift method
//  it will add the element to the array in first position.
let arrunshift = [10, 20, 30, "hello"];
arrunshift.unshift("first");
console.log(arrunshift);
arrunshift.unshift("First", "second", "third");
console.log(arrunshift);

// =================================================================================

// splice method
// 
let test = [10, 55, "hello", "testyantra", 20];

test.splice(1, 2, "j spider","hello","hi");
console.log(test);
console.log(test.splice(1, 2, "j spider","helo","hi")); // if we print the method we will get affected element

//by giving index number we can add new item in that particular index position
// One more way to splice the array
// disadvantange is we can add only one value at a time in this case
// if we have add the element more than the array length epmty space is created
test[15] = "techinfond";
console.log(test);

// to empty the array
// test.splice(0,5)
// console.log(test);

// negative value: it doesn't take the negative value
// test.splice(1,-2)
//     console.log(test);

// adding element without affecting the array
test.splice(1, 0, "test");
// here in place of index 1 test will occupay the position
console.log(test);
test.splice(0);
console.log(test);

// =================================================================================

// Slice method: it is used to remove the element from the array
// it will not affect the original array.
let slc = [10, 20, 30, 40, 50];
slc.slice(1, 3);
console.log(slc.slice(1, 3));
console.log(slc);
// --------------------------------
slc.slice(3, 4);
console.log(slc.slice(3, 4));
console.log(slc);
// =================================================================================
// Indexof method
// It is used to find the index number of the array
let arr2 = [22, 35, 36, 57];
console.log(arr2.indexOf(36));
console.log(arr2.indexOf(57));

// includes():returns boolean value
// it used to find whether element is present or not inside the array. if it is present it will give true if not false
console.log(arr2.includes(22));
console.log(arr2.includes(222));

// =================================================================================
// Concat method: To concat the array

let n1 = [1, 2, 3];
let n2 = [4, 5, 6];

console.log(n1.concat(n2)); //good way to add the string

// let res = n1 + n2;
// console.log(res)
let a = "Hello";
let b = "World";
console.log(a.concat(b));

// =================================================================================
// Flat Method
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth (Memory).
let test1 = [1, 2, 3, [4, [20, 30], 5]];
console.log(test1.flat(2));

// default value of flat array is 1
// =================================================================================

//sort method
// it will give the output in a order wise
// number
let jet = [5, 6, 8, 0, 78, 5, 4, 4];
console.log(jet.sort());
// String
let set = ["a", "aaa", "fff", "kkkk", "llll", "b", "d", "uuuu"];
console.log(set.sort());
// both alpha numeric
let sot = [
  50,
  "$x",
  "20a",
  "1a",
  "#6",
  "3b",
  "@%",
  "hello",
  "^",
  "&",
  "*",
  "!",
  " ",
];
console.log(sot.sort());

// actual sort method used
let h = [9, 1, 8, 3, 88];
// here output is in the decending order
console.log(
  h.sort((a, b) => {
    return b - a;
  })
);
console.log(
  h.sort((a, b) => {
    return b - a;
  })
);
// here output is in the asscending order
console.log(
  h.sort((a, b) => {
    return a - b;
  })
);

// =================================================================================
let k = [1, 5, "hello", 8, 7888, 96]
console.log(k.copyWithin(2,1,3));

