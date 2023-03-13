// access html data
// direct access html data

document.doctype;//DOCTYPE
console.log(document.doctype);
let title = document.title;
console.log(title);

let head = document.head;
console.log(head);
let body = document.body;
console.log(body) 
let style = document.styleSheets;
console.log(style)
let script = document.scripts;
console.log(script);//

let img = document.images;
console.log(img)//HTMLCollection(4) [img, img, img, img]
console.log(document.documentURI)//path:Universal Resource Identifier(file:///F:/Test%20Yantra/Mern%20Javascript/DOM/accessing.html)
console.log(document.nodeName);//document is the node
console.log(document.contentType);
console.log(document.nodeType);//number of tags used
console.log(document.URL);//Uniform Resource locator
console.log(document.onloadedmetadata);
console.log(document.embeds);//iframe
console.log(document.open("http:www.google.com"));
console.log(documentURI)//Universal Resource Identifier

console.log(document.querySelector('div'))//null 

// ====================================================================
let allproperties = window.document.all;
console.log(allproperties);//html collections
// console.log(Array.isArray(allproperties))

// let convertintoArray = Array.from(allproperties)
// console.log(convertintoArray);
// console.log(Array.isArray(convertintoArray))


// allproperties.forEach(val=>{console.log(val)})

// forEach is only for Array and nodeList
[...allproperties].forEach(val=>{console.log(val);})

// //looping elements
for (let i = 0; i<allproperties.length; i++){
    console.log(allproperties[i]);
}
// for of

for (let i of allproperties) {
    console.log(i);
}