// it will return arry object with 2 keys ie: status&Value
//? if all the promises resolved it will return Array object with key & value pair [{status:fulfilled,value:"i am resolved from p1}]


//! if the one status is rejected it will return  status& reason for rejected
// !ie = { status: rejected, reason: "i am rejected from p1" }


let p1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
      rejected("i am rejected from p1");
      resolved("i am resolved from p1");  
    });
    setTimeout(() => {
        rejected("i am rejected from p1")
    })
})

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
},5000);
Promise.allSettled([p1, p2, p3]).then(msg => {
    console.log(msg)
}).catch(err =>console.log(err)).finally(_ => {
      console.log("Executed")
    })