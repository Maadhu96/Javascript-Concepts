// <!-- Add the id & class for section & div individually  -->

// let section = document.querySelectorAll("section");
// section.forEach(val => {
//   console.dir(section);
//     val.id = 'main section'
// });

// let div = document.querySelectorAll("div")
// div.forEach(val =>
// { val.className = 'demo'; })
// console.log(div)
// =======================================
//  <!-- To add the id & multiple class name using forEach loop -->

// let ul = document.querySelectorAll('ul');
// ul.forEach(list => {
//     let li = list.getElementsByTagName("li");
//     [...li].forEach((val, index)=>{
//         val.className = `demo-${index+1}`;
//         val.innerHTML = `DEMO-${index + 1}`;
//     })
// })
// console.log(ul)

// =============================================
let section = document.getElementsByTagName('section');
section[0].style.display = 'flex';
section[0].style.width = '1000px';
section[0].style.gap = '10px'
section[0].style.margin = '20px auto'


let img = document.images;
 [...img].forEach(val => {
    val.style.width = '100%';
    val.style.height='300px'
 })

 let divs=document.getElementsByTagName('div')
Array.from(divs).forEach(val => {
    val.style.flexBasis = '30%';
    val.style.background = 'red';
    val.style.height='550px'
})


