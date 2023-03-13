let manoj = new Promise((res, rej) => {
    let test=false
    test?res("task was completed") :rej("yet to complete the task because yesterday i went to my aunty home for birthday celebration")
})

let swaroop = new Promise((res, rej) => {
  let test=true
   test
     ? res(("task was completed")) 
     : rej(
         (
           "yet to complete the task because yesterday i was in sick"
         )
       );
})
Promise.allSettled([manoj,swaroop]).then(msg=>console.log(msg)).catch(err=>console.log(err)).finally(_=>console.log("executed"))