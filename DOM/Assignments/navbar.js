// alert("hello")
var allelements = document.querySelectorAll("*")
for (var i = 0; i < allelements.length;i++){
    var element = allelements[i]
    element.style.boxSizing = "border-box"
    element.style.margin = "0px"
    element.style.padding ="0px"
}

let section = document.createElement("section")
section.style.width = "100%";
section.style.height = "80px";
section.style.backgroundColor = "yellow";
document.body.append(section);

let article = document.createElement("article");
article.style.width = "90%"
article.style.height = "inherit"
article.style.backgroundColor = "pink"
article.style.margin = "0 auto"
article.style.display = "flex"
article.style.alignItems="center"
section.appendChild(article)

let div1 = document.createElement("div")
div1.innerHTML = "logo"
div1.style.flexBasis="30%"
article.appendChild(div1)

let div2 = document.createElement("div")
// div2.innerHTML = "Menu";
div2.style.flexBasis = "70%";
article.appendChild(div2)

let ul = document.createElement("ul")
ul.style.listStyle = "none";
ul.style.justifyContent = "space-around";
ul.style.display = "flex";
div2.appendChild(ul)

let li1 = document.createElement("li")
li1.innerHTML = "Home"
ul.appendChild(li1)

let li2 = document.createElement("li");
li2.innerHTML = "LogIn ";
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerHTML = "Register";
ul.appendChild(li3);
