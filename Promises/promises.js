// let p = new Promise((resolve, reject) => {
//   let roomiscleaned = True; //i/p:True/flase
//   if (roomiscleaned) {
//     document.write("yes! room is cleaned");
//     resolve("Good Keep it up");
//   } else {
//     document.write("idiot...! clean your room");
//     reject("Please clean the room");
//   } 
// });
// p.then(msg => console.log(msg))
//   .catch(err => console.log(err))
//   .finally(() =>
//     console.log("the function is finally executed either resolve or rejected")
//   );
 
// console.log(p);
 
// =============================================================
// task1

let q = new Promise((fullfill, reject) => {
    let teabreak
    if (!teabreak == true) {
    // document.write("you can go for tea break");
        fullfill("you have 30min break");
        let h1 = document.createElement("h1")
        h1.innerHTML = " You can go for tea break";
        h1.style.position = "absolute";
        h1.style.top = "50%";
        h1.style.left = "40%";
        h1.style.transform = "translate";
        h1.style.translate = "-50%,-50%";
        h1.style.color="green"
        document.body.append(h1)

  } else {
    //  document.write("first you finish the task then go for break")
        reject("untill finish the task you don't go for tea break");
         let h1 = document.createElement("h1");
         h1.innerHTML = " first you finish the task then go for break";
         h1.style.position = "absolute";
         h1.style.top = "50%";
         h1.style.left = "40%";
         h1.style.transform = "translate";
         h1.style.translate = "-50%,-50%";
         h1.style.color = "green";
         document.body.append(h1);
  }
});
q.then(msg => console.log(msg)).catch(error => console.log(error)).finally(() => { console.log("All the best"); })

console.log(q)
