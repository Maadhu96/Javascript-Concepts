// let AjaxRequest = new XMLHttpRequest();
// let URL = "https://api.github.com/users";
// console.log(URL);
// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//     let data = JSON.parse(this.response);

//   let output = "";
//   for (let user of data) {
//     output += `<div><img src=${user.avatar_url}>
//         <h1>${user.login}</h1>
//         <a href=${user.html_url} target="_blank">View Profile</a></div>`;

//   }
//   document.getElementById("template").innerHTML = output;
// };
// AjaxRequest.send();

// =======================================
// to table

// let AjaxRequest = new XMLHttpRequest();
// let URL = "https://jsonplaceholder.typicode.com/photos";
// console.log(URL);
// AjaxRequest.open("GET", URL);
// AjaxRequest.onload = function () {
//   let data = JSON.parse(this.response);

//   let output = "";
//   for (let user of data) {
//       output += `<tr>
//    <td>${user.albumId}</td>
//    <td>${user.id}</td>
//    <td>${user.title}</td>
//    <td>${user.url}</td>
//    </tr>`
//   }
//  let tbody = document.getElementById("tbody");
//  tbody.innerHTML = output;
// };
// AjaxRequest.send()
// =================================================

let AjaxRequest=new XMLHttpRequest();
let URL="https://jsonplaceholder.typicode.com/todos"
console.log(URL)
AjaxRequest.open("GET",URL);
AjaxRequest.onload=function(){
  let data=JSON.parse(this.response)
  console.log(data)

  let output=""
  for(let user of data){
    output +=`<tr>
    <td>${user.userId}</td>
    <td>${user.id}</td>
    <td>${user.title}</td>
    <td>${user.completed}</td>
    </tr>`
  }
  let tbody=document.getElementById("tbody")
  tbody.innerHTML=output
  
}
AjaxRequest.send()

// =============================================
// es6 feature using promises
window.fetch("https://fakestoreapi.com/products").then(data => {//readable stream
    //convert stream into JSON
    data.json().then(product => { document.getElementById("fetchdata").innerHTML=product.map((val,ind)=>val.id
    )})
}).catch(error=>{console.log(error)}).finally(_ => {
    console.log(("finally data"))
})



