let empDetails = {
  eName: "Madappa",
  Id: "TYSS1234",
  company: "TYSS",
};
console.log(empDetails.Id);

// ==============================
// Adding new key and value

let empDetails1 = {
  eName: "Madappa",
  Id: "TYSS1234",
  company: "TYSS",
};
console.log((empDetails1.city = "Banglore"));
console.log(empDetails1);

// ================================
// adding new object
let empDetails2 = {
  eName: "Madappa",
  Id: "TYSS1234",
  company: "TYSS",
  city: "Banglore",
  address: () => {},
};
console.log(empDetails2);
empDetails2.address.area = "MG Road";
console.log(empDetails2.address.area);

// ==================
// Delete

delete empDetails1.company;
console.log(empDetails1);

// =================================================

// seal()
// seal method is mutable because we can update the value but we can not add new key and value
let obj = {
  sName: "swaroop",
  id: 142858,
};
console.log(Object.seal(obj)); //can update only existing value of key in pobject
console.log(Object.isSealed(obj)); //issealed method is used to check the whether object is sealed or not.
// return value is ture or false (if it is sealed o/p is true, if not o/p is false )

obj.company = "qsp"; //we can not add the new key and value

// =======================================================
// freeze
// freeze method is immutable
let obj1 = {
  sName: "swaroop",
  id: 142858,
};

console.log(obj1);
Object.freeze(obj1);
console.log(Object.isFrozen(obj1));
obj1.id = 515464151;
console.log(obj1); // we can not update the value

obj1.city = "B lore"; // we can not add the new key and value
console.log(obj1);

// ================================================================
//assign()
// Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true

//=============
// Warning for Deep Clone
const obj$4 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj$4);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Deep Clone
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }

// Merging objects with same properties
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj_1 = Object.assign({}, o1, o2, o3);
console.log(obj_1); // { a: 1, b: 2, c: 3 }
// ================================================================
// Object.create(): this method creates a new object, using an existing object as the prototype of the newly created object.

let person = {
  isHuman: false,
  details: function () {
    console.log(`My name is ${this.name}.Am I Human? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Matthew";
me.isHuman = true;
console.log(me.details());
// ================================================================
// Difference between data descriptor and accessor descriptor
// . A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.


// Object.defineProperties():
// The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

let object1 = {};

Object.defineProperties(object1, {
  property1: { value: 150000, enumerable:false },
  property2: { value: 180000, enumerable:true },
});
console.log(object1.property1);
// =======================================================
// Using Object.defineProperties
const obj6 = {};
Object.defineProperties(obj6, {
  'property1': {
    value: true,
    writable: true  
  },
  'property2': {
    value: 'Hello',
    writable: false
  },
});
  console.log(obj6.property2)


//==============================================================================
// Object.fromEntries()
// The Object.fromEntries() method transforms a list of key-value pairs into an object.

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const newobj = Object.fromEntries(entries);

console.log(newobj);// expected output: Object { foo: "bar", baz: 42 }

// Converting a Map to an Object

const m = ([['name', 'swaroop'], ['age', 25]])
const fromentries = Object.fromEntries(m)
console.log(fromentries); 

// Converting an Array to an Object

const arr = [['a', 1], ['b', 2], ['c', 3]]
const fromentries1 = Object.fromEntries(arr)
console.log(fromentries1)


// =============================================================
// defineProperty():

let test1 = {
  a:1
}
const i= (Object.defineProperty, 'a', { value: "swaroop" });
console.log(i)