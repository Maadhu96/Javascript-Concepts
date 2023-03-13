let section = document.querySelector("section");
let article = document.querySelector("article");
// console.log(article);

let p = document.createElement("p");
// p.textContent = "inserted content";

// section.insertBefore(p, article);

// section.insertAdjacentElement("beforebegin",p);
// section.insertAdjacentElement("afterbegin",p);
// section.insertAdjacentElement("beforeend",p);


// section.insertAdjacentText("afterbegin", "shashi");
// section.insertAdjacentHTML("afterbegin", "<h1>Shashi</h1>")
section.insertAdjacentHTML("beforebegin", "<h1>Shashi</h1>");


