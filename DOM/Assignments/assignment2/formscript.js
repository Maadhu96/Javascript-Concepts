// creating the form using the dom

let section = document.createElement("section")
section.style.width = "50%"
section.style.height = "90vh"
section.style.backgroundColor = "crimson"
section.style.margin="0 auto"
document.body.append(section)

let mainheading = document.createElement("h1")
mainheading.innerHTML = "Book A Room Form"
mainheading.style.textAlign = "center"

mainheading.style.fontSize="20px"
section.appendChild(mainheading)

let form = document.createElement("form")
form.style.textAlign="center"
form.style.justifyContent="center"
// form.style.display="flex"
section.appendChild(form)

let firstname = document.createElement("div")
// firstname.style.display="block"
firstname.innerHTML = "First Name"
form.appendChild(firstname)

let input1 = document.createElement("input")
input1.type = "text"
firstname.appendChild(input1)

let lastname = document.createElement("div");
lastname.style.display = "block";
lastname.innerHTML = "Last Name";
form.appendChild(lastname);

let input2 = document.createElement("input");
input2.type = "text";
input2.style.marginBottom="20px"
lastname.appendChild(input2);

let input3 = document.createElement("input")
input3.label = "Email"
input3.type = "text"
input3.style.width = "80%"
input3.style.marginBottom = "20px";
form.appendChild(input3)

let input4 = document.createElement("input");
input4.label = "Email";
input4.type = "text";
input4.style.width = "80%";
input4.style.marginBottom = "20px";
form.appendChild(input4);

let input5 = document.createElement("input");
input5.label = "Email";
input5.type = "text";
input5.style.width = "80%";
input5.style.marginBottom = "20px";
form.appendChild(input5);

let input6 = document.createElement("input");
input6.label = "Email";
input6.type = "text";
input6.style.width = "80%";
input6.style.marginBottom = "20px";
form.appendChild(input6);