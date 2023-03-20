let section = document.createElement("section");
section.id = "mainsection";


let article = document.createElement("article");
article.classList.add = "container";
section.appendChild(article)


let logoDiv = document.createElement("div");
logoDiv.className = "logoBlock";
logoDiv.innerHTML="LOGO"

let menuDiv = document.createElement("div")
menuDiv.className = "menuBlock";
menuDiv.innerHTML="Menu BLOCK"

article.appendChild(logoDiv);
article.appendChild(menuDiv);


document.body.appendChild(section)
// ==============================================================

// let section = document.createElement("section");
// section.id = "mainsection";
// section.style.position = "absolute"
// section.style.top = "45%"
// section.style.left="50%"
// document.body.appendChild(section)

// let article = document.createElement("article");
// article.classList.add("container")
// section.appendChild(article)

// let form = document.createElement("form")
// article.appendChild(form)

// let div1 = document.createElement("div");
// div1.style.paddingbottom = "10px"
// form.appendChild(div1)

// let label = document.createElement("label")
// label.textContent="User Name :"
// div1.appendChild(label)

// let input1 = document.createElement("input");
// div1.appendChild(input1)
// // ========================

// let div2 = document.createElement("div");
// form.appendChild(div2);

// let label1 = document.createElement("label");
// label1.textContent = "Password :";
// label1.style.alignItems="end"
// div2.appendChild(label1);

// let input2 = document.createElement("input");
// div2.appendChild(input2);

// // =================================

// let btn = document.createElement("button")
// btn.style.padding = "10px";
// btn.innerText = "Submit"
// btn.style.position = "absolute"
// btn.style.left="60px"
// form.appendChild(btn)

// ================================

// let form = document.createElement("form")
// form.method = "GET";
// form.action = "#php";
// form.style.position = "absolute";
// form.style.left = "50%"
// form.style.top = "30%"; 
// document.body.appendChild(form)

// let label = document.createElement("label");
// label.textContent = "User Name :"
// form.appendChild(label)

// let emailinput = document.createElement("input")
// emailinput.type = "email";
// emailinput.placeholder = "enter the email"
// emailinput.className = "form-control";
// emailinput.name = "email";
// form.appendChild(emailinput);

// let break1 = document.createElement("br")
// form.appendChild(break1)

// let label2 = document.createElement("label");
// label2.textContent = "User Password :"
// form.appendChild(label2)

// let password = document.createElement("input")
// password.type = "password";
// password.placeholder = "enter password";
// // password.className="form-password"
// password.name = "password";
// form.appendChild(password)

// let break2 = document.createElement("br");
// form.appendChild(break2);

// let btn = document.createElement("button");
// btn.classList.add("btn");
// btn.innerHTML = "Submit";
// btn.style.textAlign = "center";
// form.appendChild(btn)
