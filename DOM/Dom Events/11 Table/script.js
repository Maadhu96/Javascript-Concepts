let empdetails = [
  {
    id: 1234,
    Name: "Swaroop",
    Salary: 20000,
    Gender: "Male",
    Designation: "Associate Software Engineer",
    Experience: "2yrs",
    Education: "BE in Civil",
    City: "Banglore",
    Skills: "Java,HTML,CSS,JavaScript",
  },
  {
    id: 4321,
    Name: "Sanjay",
    Salary: 23000,
    Gender: "Male",
    Designation: "Associate Software Engineer",
    Experience: "2yrs",
    Education: "BE in EC",
    City: "Banglore",
    Skills: "Java,HTML,CSS,JavaScript,react",
  },
  {
    id: 421,
    Name: "Sanjay",
    Salary: 23000,
    Gender: "Male",
    Designation: "Associate Software Engineer",
    Experience: "2yrs",
    Education: "BE in EC",
    City: "Banglore",
    Skills: "Java,HTML,CSS,JavaScript,react",
  },
  {
    id: 4334545421,
    Name: "Sanjay",
    Salary: 23000,
    Gender: "Male",
    Designation: "Associate Software Engineer",
    Experience: "2yrs",
    Education: "BE in EC",
    City: "Banglore",
    Skills: "Java,HTML,CSS,JavaScript,react",
  },
  {
    id: 43225321,
    Name: "Sanjay",
    Salary: 23000,
    Gender: "Male",
    Designation: "Associate Software Engineer",
    Experience: "2yrs",
    Education: "BE in EC",
    City: "Banglore",
    Skills: "Java,HTML,CSS,JavaScript,react",
  },
  {
    id: 435521,
    Name: "Sanjay",
    Salary: 23000,
    Gender: "Male",
    Designation: "Associate Software Engineer",
    Experience: "2yrs",
    Education: "BE in EC",
    City: "Banglore",
    Skills: "Java,HTML,CSS,JavaScript,react",
  },
];
 console.log(empdetails);

let output = "";
for (let emp of empdetails) {
    output += `
      <tr>
        <td>${emp.id}</td>
        <td>${emp.Name}</td>
        <td>${emp.Salary}</td>
        <td>${emp.Gender}</td>
        <td>${emp.Designation}</td>
        <td>${emp.Experience}</td>
        <td>${emp.Experience}</td>
        <td>${emp.City}</td>
        <td>${emp.Skills}</td>
        <td><span class="delete">Delete</span></td>
      </tr>`
}
let tbody = document.getElementById("tbody")
tbody.innerHTML = output;
document.querySelectorAll(".delete").forEach(span => {
    span.addEventListener("click", e => {
        e.target.parentElement.parentElement.remove();
    })
})