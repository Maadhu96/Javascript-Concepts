// // here we can get the below
// // removing the element from the list: ie remove() method
// // targeting the element by using innerHTML

// // it is used to choose the element present in the list

// ============================================

// To do list Using event delegation  here we can add multiple item and remove multiple item
let form = document.querySelector("form");
let ul = document.querySelector("ul");

// get form value

form.addEventListener("submit", e=>{
    e.preventDefault();
    let value = e.target[0].value;

    let li = document.createElement("li");
    li.innerText = value;
    ul.appendChild(li);
})

// remove the element

ul.addEventListener("click", e =>  {
    e.target.remove();
})


