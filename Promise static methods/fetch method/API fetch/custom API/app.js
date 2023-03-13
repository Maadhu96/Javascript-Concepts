let list = document.querySelector("#list")
let form = document.querySelector("form");
let table = document.querySelector("table")
let data1 = document.querySelector("#data-name1");
let data2 = document.querySelector("#data1");
let data3 = document.querySelector("#data-company");
let image = document.querySelector("#list");
let arr = []
console.log(data2);

async function Employee_card() {
    let data = await window.fetch("./custom.json")
    console.log(data);
    let finalData = await data.json()
    console.log(finalData)

    finalData.forEach((e) => {
        let val = e.eName;
        list.innerHTML+=`<option>${val}</option>`
    })
   list.addEventListener("change", e=>{
     let val = (e.target.value);
     console.log(val);
    
      switch (val) {
        case "Manish":
          let arr1 = finalData[0];
          data1.innerText = `${arr1.eName}`;
          data2.innerText = `${arr1.id}`;
          data3.innerText = `${arr1.company}`;
          image.innerHTML = `<img src="${arr1.image}">`;
          break;

        case "Sangamesh":
          let arr2 = finalData[1];
          data1.innerText = `${arr2.eName}`;
          data2.innerText = `${arr2.id}`;
          data3.innerText = `${arr2.company}`;
          break;

        case "Krishna":
          let arr3 = finalData[2];
          data1.innerText = `${arr3.eName}`;
          data2.innerText = `${arr3.id}`;
          data3.innerText = `${arr3.company}`;
          break;
        case "Shyam":
          let arr4 = finalData[3 ];
          data1.innerText = `${arr4.eName}`;
          data2.innerText = `${arr4.id}`;
          data3.innerText = `${arr4.company}`;
          break;
      }
   })
  
 
}
Employee_card()