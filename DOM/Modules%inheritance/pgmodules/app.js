//!named import :

//? single named import example.

// import { mernstack } from "./modules.js";
// console.log(mernstack);// it returns the object.
// ............................

// import { mernstack } from "./modules.js";
// mernstack.frontEnd.forEach(x=>
//     console.log(x));          // for iteration purpose i have used the forEach method.


//? multiple named import example.

// import { mernstack, javaFullStack } from "./modules.js";
// console.log(mernstack, javaFullStack);// it returns the object.
//.............................

// import { mernstack, javaFullStack } from "./modules.js";
// console.log(mernstack.backEnd);// it returns backend value which are i the form of array.
// console.log(javaFullStack.backEnd);


// import { mernstack, javaFullStack } from "./modules.js";
// console.log(mernstack.backEnd.forEach(x => console.log(x)));// for iteration purpose i have used the forEach method.

//! default import.

// import mernstack from "./modules.js";
// console.log(mernstack);// normal way of calling the default import method.

// import test from "./modules.js";
// console.log(test);// we can call any name in the default import were the exact name is not mandatory.

//! aliasing of the named import.

// import { mernstack as mern } from "./modules.js";
// console.log(mern);// alway named must be written inside the curly braces.

// // another way.

// import { mern } from "./modules.js";
// console.log(mern);// aliasing can be done on any either on the export side or on the import side.

//! aliasing of the default import.(the reason for writing this is that we cannot write the aliasing in default export because it can be called by any name while calling itself,so no mandatory particular name to be called so it cannot use any aliasing if you try to use it throws an error.
//! eg: import mernstack as mern from "./modules.js";console.log(mern);)

//.............................

//! dynamic module loading:--

//? step 1.// checking the stored value that returns promise.
let storingImport=import("./modules.js");
console.log(storingImport);// it returns promise.Promise {<pending>}.

//? step 2.

import("./modules.js").then(data => { console.log(data) }).catch(err => console.log(err));
// know it as returned modules.

//?step 3 .
import("./modules.js")
  .then(data => {
    data.mernstack.backEnd.forEach(x=>console.log(x));
  })
  .catch(err => console.log(err));// it trageting the inner content by selecting mernstack ,then backend then for iterating it we used forEach method.



















//! universal  usage of the export which includes both the named and the default import.

// import pythonFullStack, { mernstack, javaFullStack } from "./modules.js";
// console.log(pythonFullStack);




