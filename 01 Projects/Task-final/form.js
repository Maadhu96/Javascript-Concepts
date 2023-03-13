let inp = document.querySelectorAll(".form-control");
let form = document.querySelector("form");
let gen = document.getElementById("gen")
let h2 =document.querySelector("h2")


form.addEventListener("submit", e => {
  e.preventDefault();
  let user = []
  let keys =[]
  gen.addEventListener("click", e => {
    let gender = e.target.value;
    localStorage.setItem("gender",gender)
  });
  inp.forEach(val => {
    if (val.value === "") {
      // alert("All Fields are mandatory " + ` Enter ${val.name}`);
      val.style.border = "2px solid red";
    }
     else {
      user.push(val.value);
      keys.push(val.name)
      if (user.length > 6) {
        window.localStorage.clear()
        user.forEach((val, ind) => {
          window.localStorage.setItem(keys[ind],val);
        })
         form.style.display = "none";
         h2.innerHTML = `Welcome to Tyss`;
         h2.style.color = "greenYellow";
        h2.style.fontSize = "40px";
        document.body.innerHTML = `<section id="table">
        <figure><img src="" alt=""></figure>
        <div>
        <ul id="root">
        <h1>${window.localStorage.getItem(
          "First Name"
        )} ${window.localStorage.getItem("Last Name")}</h1>
        <li>Email: ${window.localStorage.getItem("Email")}</li>
        <li>Phone: ${window.localStorage.getItem("Phone")}</li>
        <li>City: ${window.localStorage.getItem("city")}</li>
        <li>Age: ${window.localStorage.getItem("age")} Years</li>
        </ul>
    </div>
    </section>`;
      }
      else {
        return null;
      }
      }
  })});

