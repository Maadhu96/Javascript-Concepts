let mainSection = document.getElementById('mainSection')

// console.log(mainSection);
// console.dir(mainSection.attributes);

// let test = (mainSection.attributes[0].id = "demo")

// console.log(test);


// Inbulit Properties
mainSection.id = "demo";
mainSection.className = "demo";
mainSection.disabled = true;
mainSection.title = "hello we are learning js & DOM";
console.log(mainSection.tagName);
if (mainSection.tagName === "DIV") {
    console.log("This is div Block");
}
else {
    console.log("This is Not a div Block")
}

// let demo = (mainSection.chombu = "yes i am a chombu");
// console.log(demo);

mainSection.setAttribute("chombu", "yes i am a chombu")

// ==============================================================

// let container=document.getElementsByClassName("container")
// container.className="container";
// container.id="cont"
// console.log(container.tagName)



















// get & set Attribute

// let mainSection = document.getElementById("mainSection")
// let child = mainSection.querySelectorAll(".container");

//   child.forEach((val, index) => {
//     let attr = val.getAttribute("class");
//     console.log(attr);

//     val.setAttribute("id", `index-${index + 1}`);

//     let idAttr = val.getAttribute("id");
//     console.log(idAttr);
//   });

// =========================================================
 