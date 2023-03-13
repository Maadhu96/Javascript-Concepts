// let form = document.querySelector("form");
// let list = document.querySelectorAll("li");
// let ul = document.querySelector("ul")
// let edit = document.querySelectorAll("#edit")
// let del = document.querySelectorAll("#del")
// // let btn=document.querySelectorAll("button")
// let input=document.querySelector("input")


// // get the value
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     let val = e.target[0].value;

//     let list = document.createElement("li")
//     ul.appendChild(list)
//     list.innerHTML = `<input type="text" value="${val}" disabled      class="input-list"> <button id="edit">Edit</button> <button id="del">Delete</button>`
//     let test = list.childNodes[4];
//     let edit = list.children[1];
//     test.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     })
//       edit.addEventListener("click", e => {
//         let toggle = e.target.classList.toggle("active");
//         if (toggle) {
//           e.target.previousElementSibling.removeAttribute("disabled");
//         } else {
//           e.target.previousElementSibling.setAttribute("disabled", "false");
//         }
//       });
//     });

// del.forEach(index => {
//     index.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     })
// })


// edit.forEach(index => {
//     index.addEventListener("click", e => {
//         let toggle =e.target.classList.toggle("active");
//         if (!toggle) {
//             e.target.previousElementSibling.removeAttribute("disabled");

//         }
//         else {
//             e.target.previousElementSibling.setAttribute("disabled", "true");
//         }
//    })
// })

//=====================================================

let form = document.querySelector("form")
let ul = document.querySelector("ul")
let del = document.querySelectorAll("#del")
let edit=document.querySelectorAll("#edit")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let value=e.target[0].value
    let list = document.createElement("li")
    list.innerHTML = `<input type="text" class="input-list" value=${value} disabled> <button id="edit">Edit</button> <button id="del">Delete</button>`;
    ul.appendChild(list);
    //! delete all the list items
    let del = list.childNodes[4]
    del.addEventListener("click", e => {
      e.target.parentElement.remove();
    });
    //! edit all the list items;
    let edit = list.childNodes[3]
     edit.addEventListener("click", e => {
       let toggle = e.target.classList.toggle("active");
       if (!toggle) {
          e.target.previousElementSibling.setAttribute("disabled", "false");
       } else {
          e.target.previousElementSibling.removeAttribute("disabled");
       }
     });
})
del.forEach(index => {
    index.addEventListener("click", e => {
        e.target.parentElement.remove()
    })
})

edit.forEach(index => {
    index.addEventListener("click", e => {
        let toggle = e.target.classList.toggle("active")
        if (!toggle) {
           e.target.previousElementSibling.removeAttribute("disabled")
        }
        else {
           e.target.previousElementSibling.setAttribute("disabled","true"); 
        }
    })
})




