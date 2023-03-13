// Race method will return the statement.
// it is mainly depending on time interval 

 let Rashid = new Promise((res, rej) => {
    setTimeout(() => {
        res("i am Rashid, reached")
    }, 2000)
    setTimeout(() => {
        rej("i am Rashid, slow")
   },5000)
})

let Siddarth = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am Siddarth, reached");
  }, 2000);
  setTimeout(() => {
    rej("i am Siddarth, slow");
  },3000);
});

let Shyam = new Promise((res, rej) => {
  setTimeout(() => {
    res("i am Shyam, reached");
  }, 2000);
  setTimeout(() => {
    rej("i am Shyam, faster");
  },1000);
});

Promise.race([Rashid,Siddarth,Shyam]).then(data=>console.log(data)).catch(err=>console.log(err)).finally(console.log("Race was completed"))