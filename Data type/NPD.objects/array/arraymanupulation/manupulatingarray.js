// how make an Array empty by using the splice method

let element = [1, 3, 45, 69, 28, -89, 54]

for (i = element.length - 1; i >= 0; i--){
    if (element[i] % 1 === 0) {
        element.splice(i,2)
    }
}
console.log(element)
// ==========================================
// By assigning the length value is 0; 

let arr = [10, 20, 30, 40, 50]

arr.length = 0;

console.log(arr);

//==================================================
// by using HOF 

function empty(arr,cb){
    let emptyArray = []
    for (let i = 0; i < empty.length; i++){
        if (cb(arr[i])) {
          emptyArray.push(arr[i]);  
        }
    } 
    console.log(emptyArray);
}
empty([10,20,30,40,50],(val=>val<0))
