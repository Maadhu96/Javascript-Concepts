let section = document.getElementsByTagName('section')
section[0].style.display = 'flex';
section[0].style.width = '1000px';
section[0].style.gap = '10px';
section[0].style.margin = '20px auto';

console.log(document.getElementsByTagName('section'))//HTML Collections

// for all images
let img = document.images;
[...img].forEach(img1 => {
    img1.style.width = '100%';
    img1.style.height = '200px';
});
console.log(document.images);//HTML Collections

// fetch all divs
// let divs = document.getElementsByTagName('div')
// Array.from(divs).forEach(val => {
//     val.style.flexBasis = '30%'
//     val.style.background = '#fff';
//     val.style.height='300px'
// })
// =============================================
// using querySelectorAll

let divwithQueryAll = document.querySelectorAll('div')
console.log(divwithQueryAll);//NodeList

divwithQueryAll.forEach(val => {
    val.style.flexBasis = '30%'
    val.style.background = "crimson ";
    val.style.height = "300px";
})

// ======================================
// create the id & class using the javascript and add style in css

// let section = document.querySelectorAll('section');

// section.forEach(val => {
//     // console.dir(val);
//     val.id="mainSection"
// })

// // fetch all images and add classes to images

// let images = document.images;
// // console.dir(images);
// here we can not use the forEach directly because html images give html collections and html collection are not ittiratable
// [...images].forEach(img => {
//     img.className = "course-image"
// });

// // fetch all divs and add classes to div

// let divs = document.querySelectorAll('div');
// // console.dir(divs)
// divs.forEach(div => {
//     div.className = 'container'
//     // console.dir(div)
// })
