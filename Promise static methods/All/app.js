// ? all method will execute the all the methods if one method is not satisfied it will return only that statement with finally method

let p1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("i am resolved from p1");

  });
  setTimeout(() => {
    rejected("i am rejected from p1");
  });
});
console.log(p1);
let p2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("i am rejected from p2");

    resolved("i am resolved from p2");
  });
  setTimeout(() => {
    rejected("i am rejected from p2");
  });
});

console.log(p2)
let p3 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("i am resolved from p3");
  });
  setTimeout(() => {
    rejected("i am rejected from p3");
  });
});
console.log(p3)

Promise.all([p1, p2, p3])
  .then(msg => {
    console.log(msg);
  })
  .catch(err => console.log(err))
  .finally(_ => {
    console.log("Executed");
  });

// ! practice

// Promise.all will execute all the methods and if the one method is fail. it will execute that statement with final method
  // let q1=new Promise((res,rej)=>{
  //   setTimeout(()=>{
  //     // rej("i am rejected from the q1")
  //     res("i am resolved from the q1")
  //   })
  //   setTimeout(()=>{
  //     rej("i am rejected from the q1")
  //   })
  // })

  // let q2=new Promise((res,rej)=>{
  //   setTimeout(()=>{
  //     res("i am resolved from the q2")
  //   })
  //   setTimeout(()=>{
  //     rej("i am rejected from the q2")
  //   })
  // })

  // Promise.all([q1,q2]).then((msg=>console.log(msg))).catch(error=>console.log(error)).finally(_=>{
  //   console.log("am executed ")
  // })


  //! =============================
