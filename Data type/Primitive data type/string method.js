// ! eval()
let str=("2+2")
console.log(eval(str))

let str1=new String("2+2")
console.log(eval(str1))//String {'2+2'}
console.log(eval(str1.valueOf()))
// =======================================================
// ! String.fromCharCode()
// ?The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
console.log(String.fromCharCode(199, 43, 160, 61));
// expected output: > "Ç+ ="
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"

// ====================================================
// indexof(): it is used to find the index value
let a = "wel come";
console.log(a.indexOf("c"));
// ====================================================

// slice(): it is used to fetch the value by giving index value(ex:(2,5))
// if we mention the value string it will slice the string
let b = "hello javascript";
console.log(b.slice(2, 5));
console.log(b.slice(12));
// ====================================================
// substring()
let c = "substring method";
console.log(c.substring(2, 5));
// ====================================================
// concat()
let d = "hello";
let e = "World";
console.log(d.concat(e));
// ====================================================

// Trim()
//  It will remove the space starting and ending of the paragraph
let f =
  "                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, facere    ";
console.log(f.trim());
// ====================================================

// Trim start()
let g =
  "                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, facere";
console.log(g.trimStart());
// ====================================================

// Trim end()

let h =
  "                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, facere               ";
console.log(g.trimEnd());

// ====================================================
// To string(): It is used to convert any data type into string
let i = 200
console.log(i.toString());
l = i.toString();
console.log(typeof (l));//we use typeOf to check the data type

// =====================================================

// chartAt(): it is used to find the character inside the string  using index value
let j = "hello world"
console.log(j.charAt(4));

// =====================================================
// charcodeAt():It is used to find the charcode of the string. we should mention the index number
let k = "A hello Javascript"
let m = k.charCodeAt(0)
console.log(m)

// ===============================================================
// search(): it is used to find the index number of the 
let n =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, fugiat.";
let o = n.search("V")
console.log(o)//58 It give Index value
  


// ===============================================================
// Match()
// return value is PureArray with value and index.
// if the value is not there then o/p is null.

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = ['dog'];
const found = paragraph.match(regex);

console.log(found);//['g', index: 42, input: 'The quick brown fox jumps over the lazy dog. It barked.', groups: undefined]
console.log(Array.isArray(found));//True o/p is Boolean
// expected output: Array ["T", "I"]