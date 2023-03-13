// let p = window.fetch("https://api.github.com/users");

// console.log(p);
// p.then(data => {
//     let finalData = data.json();
//     finalData.then(users => {
//         // console.log(users);
//         let arr=[]
//         users.map(m => {
//             console.log(m.login);
//             let str = "";
//             str += m.login;
//             arr.push(str)
//         })
//     })
//     console.log(arr.sort())
// })

// =================================
// to fetch the id of each github users
// let p = window.fetch("https://api.github.com/users");

// console.log(p);
// p.then(data => {
//   let finalData = data.json();
//   finalData.then(users => {
//     console.log(users);
//     let arr = [];
//     users.map(m => {
//       console.log(m.login);
//       let str =0;
//       str += m.id;
//       arr.push(str);
//     });
//   });
// });

// =====================================
// To fetch the each github user images
let q = window.fetch("https://api.github.com/users");

console.log(q);

q.then(data => {
    let image = data.json() 
    image.then(user => {
        console.log(user)
        user.map(m => {
            console.log(m.avatar_url);
           document.getElementById(
             "myDiv"
           ).innerHTML += `<img src=${m.avatar_url}/>`;
        })
    })
})
