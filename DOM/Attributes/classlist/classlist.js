let mainsection = document.getElementById("demosection")

console.log("mainsection")
// creating the class using the className
// if we create the class using className if you change the class it will override the class name
mainsection.className = "active";
mainsection.setAttribute("class", "demo");

// DOMTOKENLIST
// ==========
// using class list: we can create multiple number of class
console.log(mainsection.classList);
mainsection.classList.add("demo","qsp","testyantra")

// using className
mainsection.className="active demo tyss qsp"