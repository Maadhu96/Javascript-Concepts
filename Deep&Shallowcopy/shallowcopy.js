// Shallow copy :A copy of original object is strored and only reference address is finally copied
// Shallow copy is required when you make  copies of classes that share set of data.



let ingredient_list = ["Noodles", { list: ["maggi", "yippee", +"water"] }]

let ingredient_list_copy = Array.from(ingredient_list)

console.log(ingredient_list_copy);//(2) ['Noodles', {…}]

console.log(JSON.stringify(ingredient_list_copy))//["Noodles",{"list":["maggi","yippee","water"]}]

// change the value off the list property in ingredient_list_copy will also cause the list property to change ingredient_list source object

ingredient_list_copy[1].list = ["Dosa", "idly"]
console.log(ingredient_list_copy[1].list);//(2) ['Dosa', 'idly']

console.log(JSON.stringify(ingredient_list));//["Noodles",{"list":["Dosa","idly"]}]


// Assigning the new value to the first element in ingredient_list_copy will not cause any change to the first element in the ingrdient_list

ingredient_list_copy[0] = "Rice Noodles";

console.log(ingredient_list_copy[0]);//Rice Noodles

console.log(ingredient_list_copy)
console.log(ingredient_list);

// ================================================
// Shallow copy:if we directly assigned to the variable like arr1=arr2. if any changes made in arr2 cause the changes in the arr1.ie is Shallow copy
//Even though we don't want to change the value of arr1 after change the value in arr2 we use spread operator ie [...arr2] for array,{...obj} for object.

// ! Shallow copy
// let arr = [1, 2, 3, 4, 5]
// let arr3 = arr;
// arr3[3] = 5
// console.log(arr);
// console.log(arr3);

// ===============

//! Deep copy
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [...arr1];
// arr2[3] = 5
// console.log(arr1);
// console.log(arr2);
// // ===================================
// let obj = {
//     eName: "Swaroop",
//     id:1234,
//     address:{place:"Manglore",
//     pincode:570009}
// }
// let obj2 = {...obj}
// obj2.eName = "Sanjay"
// obj2.address.pincode=123456
// console.log(obj)
// console.log(obj2);

// ! if it is a primtive data type and we use the Object.assign & Spread operator we get deep copy
// ! if it is a non pimitive data type and we use te Object.assign and Spread operator we get shallow copy
// ? if we do the json method non primitive data types are deep copy
// let objectcopy =JSON.parse(JSON.stringify(obj2));
// objectcopy.address.pincode=64537378
// console.log(objectcopy)
// // ======================================
// let object = { 
//   eName: "Shyam",
//   id: 1234,
// };
// let object2 = object
// let a =JSON.parse(JSON.stringify(object2));//to convert into deep copy 
// a.eName="Sanjay"
// console.log(a)
// console.log(object);

// ==============
// let shyam={
//   ename:"shyam",
//   id:123,
//   address:{place:"Mysore",
// pincode:570008}
// }

// let shyam1=Object.assign({},shyam)

// shyam1.ename="Madappa"
// shyam1.address.place="banglore"
// console.log(shyam)
// console.log(shyam1)

// =========================
// Deep copy 
let Manoj={
  ename:"shyam",
  id:123,
  address:{place:"Mysore",
pincode:570008}
}
console.log(Manoj)
let manoj=JSON.parse(JSON.stringify(Manoj))
manoj.address.place="Mandya"
manoj.ename="Manoj"
console.log(manoj)

