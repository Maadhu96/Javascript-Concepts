//named modules .
//! what are modules in javascript ?
/*  modules are the files containing the piece of code these files can be called whenever we required in the main file by using import and export.

these modules are of 2 types types that they are 
1. common js module.=> these are only used for backend by using the (//? require keyword)
2.ES6 module => 1.named export and 2. default export.
*/

// !named export:

//? single named export example

//     export let mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"]
// }

//? multiple named export example.

// export let mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"]
// }
// export let javaFullStack = {
//     frontEnd: ["html", "css"],
//     backEnd: ["java", "spring", "hibernate"],
//     database: ["mysql", "sql"]
// }

//?another method.

//  let mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"]
// }
//  let javaFullStack = {
//     frontEnd: ["html", "css"],
//     backEnd: ["java", "spring", "hibernate"],
//     database: ["mysql", "sql"]
// }
// export { mernstack, javaFullStack };

//! default export.

//  let mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"]
// }
// export default mernstack;  // only one default export can be called in the entire file.that we cannot call more than one default export that it will throw an error.

//! aliasing of the named export

//  export  let  mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"]
// }


//?another way.
    //  let mernstack = {
    //    frontEnd: ["html", "css", "js", "react"],
    //    backEnd: ["nodejs", "express js", "socket.io"],
    //    database: ["mysql", "mongodb"],
    //  };
    //  export { mernstack as mern };

//! aliasing of the default export.
//! in aliasing no sequencial order is required to write the objects name.

//  let mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"],
// };
// export default mernstack;
  

//.......................................

//! dynamic module loading:--
// dynamic module returns the promise.

 let mernstack = {
    frontEnd: ["html", "css", "js", "react"],
    backEnd: ["nodejs", "express js", "socket.io"],
    database: ["mysql", "mongodb"],
};
export { mernstack };

































//! universal  usage of the export which includes both the named and the default export.

// export let mernstack = {
//     frontEnd: ["html", "css", "js", "react"],
//     backEnd: ["nodejs", "express js", "socket.io"],
//     database: ["mysql", "mongodb"]
// }
// export let javaFullStack = {
//     frontEnd: ["html", "css"],
//     backEnd: ["java", "spring", "hibernate"],
//     database: ["mysql", "sql"]
// }
//  let pythonFullStack = {
//     frontEnd: ["html", "css"],
//     backEnd: ["python", "django"],
//     database: ["mysql", "sql"]
// };


 





