// we can add the class name and content using tagName

// let ul = document.querySelectorAll("ul")
// ul.forEach(list => {
//     let li = list.getElementsByTagName("li");
//     [...li].forEach((val, index) => {
//         val.className = `demo-${index + 1}`;
//         val.innerHTML=`DEMO-${index+1}`
//     })
// })



// =================================================
//  Making grid:using getElementById

let section = document.getElementById('mainsection');
let divs = section.getElementsByTagName("div");
console.log(divs);
[...divs].forEach((div, i)=>{
    div.className = `container`;
    div.innerHTML = `
    <h1>TestYantra</h1>
   <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis corporis placeat esse aperiam architecto provident, voluptates eaque totam dolores, libero dolore dicta repellat recusandae exercitationem. Eius repellat perferendis nostrum incidunt quis maxime expedita eos ullam, et iure nihil, velit dolore odio nesciunt recusandae possimus adipisci distinctio minus cupiditate illum?</p>
   <button class="btn">Next</button>`;
})