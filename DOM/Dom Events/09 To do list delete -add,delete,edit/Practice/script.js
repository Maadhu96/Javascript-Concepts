let form = document.querySelector("form");
let ul = document.querySelector("ul");
let edit = document.querySelectorAll("#edit");
let del = document.querySelectorAll("#del");

form.addEventListener("submit", e => {
  e.preventDefault();
  list = document.createElement("li");
  ul.appendChild(list);
  let val = e.target[0].value;
  list.innerHTML = `<input type="text" value=${val} disabled /> <button id="edit" >edit</button> <button id="del">delete</button>`;

    let edit = list.childNodes[2];
   edit.addEventListener("click", e => {
        let toggle = e.target.classList.toggle("active");
       if (toggle) {
            e.target.previousElementSibling.removeAttribute("disabled");
            
        } else {
          e.target.previousElementSibling.setAttribute("disabled", false);
            
        }
   });
    let del = list.childNodes[4];
    console.log(del)
    del.addEventListener("click", e => {
      e.target.parentElement.remove();
    });
});
del.forEach(index => {
  index.addEventListener("click", e => {
    e.target.parentElement.remove();
  });
});

edit.forEach(index => {
  index.addEventListener("click", e => {
    let toggle = e.target.classList.toggle("active");
    if (toggle) {
      e.target.previousElementSibling.removeAttribute("disabled");
    } else {
      e.target.previousElementSibling.setAttribute("disabled", true);
    }
  });
});
