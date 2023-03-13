let tr = document.querySelector("tr th:nth-child(2)")
console.log(tr);
console.log((tr.nextElementSibling));
console.log(tr.previousElementSibling);
// =====================
// next sibling
tr.nextElementSibling.style.color = "red";
tr.nextElementSibling.nextElementSibling.nextElementSibling.style.color = "red"

// ==================
// previous sibling

tr.previousElementSibling .style.color = "#fff"
tr.previousElementSibling.style.background="green"
