let test = [{ eName: "Swaroop", id: 123, Gender: "Male", Education: "BE Civil", MaritalStatus: "Unmarried" }]

let test1 = JSON.stringify(test)
console.log(test1);

let test2 = JSON.parse(test1)
console.log(test2)