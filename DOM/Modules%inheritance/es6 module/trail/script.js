// // Named export

// export let mernFullStack = {
//     frontend: ["html", "css", "js", "react"],
//     backend: ["express.js", "node.js"],
//     database:["sql","monodb"]
// }

// // Named export

// export let pythonFullstack  = {
//     frontend: ["html", "css", "js", "react"],
//     backend: ["python", "django"],
//     database:["sql","monodb"]
// }

// // default



// let javafullstack={
//     frontend: ["html", "css", "js", "react"],
//     backend: ["express.js", "node.js"],
//     database:["sql","monodb"]
// }

// export default javafullstack

// ====================================
// exporting all once

let mernFullStack = {
  frontend: ["html", "css", "js", "react"],
  backend: ["express.js", "node.js"],
  database: ["sql", "monodb"],
};

 let pythonFullstack = {
  frontend: ["html", "css", "js", "react"],
  backend: ["python", "django"],
  database: ["sql", "monodb"],
};

let javafullstack = {
  frontend: ["html", "css", "js", "react"],
  backend: ["express.js", "node.js"],
  database: ["sql", "monodb"],
};

// export {mernFullStack,pythonFullstack,javafullstack}

export { mernFullStack as mern, pythonFullstack as python, javafullstack as java };
