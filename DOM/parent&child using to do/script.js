// Targeting the element using parent
// let remove = document.querySelectorAll(".delete");
// remove.forEach(val => {
//     val.addEventListener("click", e => {
//         e.target.parentElement.remove();
//     })
// })


// ==========================================
// Targeting the element using children ie:li
let list = document.querySelectorAll("li");
list.forEach(val => {
    let remove = val.children[1];
    remove.addEventListener("click", e => {
        e.target.parentElement.remove();
    })
})
