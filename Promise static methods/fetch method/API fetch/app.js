let country = async () => {
    let x = await window.fetch("https://restcountries.com/v3.1/all");
    // console.log(x);
    let finalData = await x.json();
    // console.log(finalData)
    let arr = []
    finalData.map(m => {
        // console.log(m.name.common);
        let str = ""
        str += m.name.common;
        arr.push(str)
    })
    console.log(arr)

    let countriesSort = arr.sort()
    // console.log(countriesSort);
    countriesSort.map(mapped => {
       mapped
    })
    document.getElementById("list").innerHTML+=`<li>${mapped}</li>`
}
country()



