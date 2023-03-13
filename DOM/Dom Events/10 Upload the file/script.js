let form = document.querySelector("form");
let input = document.querySelector("input");
// =======================
// after submission
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e.target[0].files[0].name);

    // ================================
// this for before submission
//     input.addEventListener("change", e => {
//         console.log(e.target.files[0].name)
//     })
});