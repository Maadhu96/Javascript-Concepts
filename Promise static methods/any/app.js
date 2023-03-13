//! Here only one promise will execute i.e first fullfilled statement
// ? It will checks the Promise line by line and execute only one promises i.e which one is first fullfill the statement
//! it will return the statement


let p1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("i am resolved from p1");
    // rejected("i am rejected from p1");
  });
  setTimeout(() => {
    rejected("i am rejected from p1");
  });
});

let p2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("i am resolved from p2");
  });
  setTimeout(() => {
    rejected("i am rejected from p2");
  });
});

let p3 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("i am resolved from p3");
  });
  setTimeout(() => {
    rejected("i am rejected from p3");
  });
});
Promise.any([p1, p2, p3])
  .then(msg => {
    console.log(msg);
  })
  .catch(err => console.log(err))
  .finally(_ => {
    console.log("Executed");
  });
