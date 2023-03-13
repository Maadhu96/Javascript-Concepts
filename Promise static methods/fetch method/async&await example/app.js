// we should fetch the price and use  the reduce method

async function product() {
    let data = await window.fetch("https://fakestoreapi.com/products");
    console.log(data);
    let finalData =await data.json();
    console.log(finalData);
    let sum = 0;
     finalData.map(m => {
        //  console.log(m)
        //  let sum = 0;
         sum += m.price;
        //  console.log(m.price);//it will give actual price of the prodct
        //  let sum1 = Math.round(sum)//used to round the price of the product
        //  console.log(sum1);
        //  arr.push(sum1) 
     })
    // console.log(arr);
console.log(`The Auction value of all products is ${Math.round(sum)}`)
    // let total = arr.reduce(sum1)
}
product()