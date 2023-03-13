function x() {
    try {
        console.log("try");
    } catch (error) {
        console.log("catch")
    }
    finally {
        console.log("finally");
    }
}
x()

// ===================================================
//?  return keyword won't work inside the try catch block
// !return key will ignored
function y() {
    try {
        return "try"
    } catch (error) {
        return "catch"
    }
    finally{
return "i am returned from finally"
    }
}
y()
console.log(y())

// ============================
let z = "";
// let str=(a,b)=>console.log(a+b);
try {
    z=str("hi","Hello")
} catch (error) {
  console.log(error); //!ReferenceError: str is not defined
}
finally {
    console.log("finally");
}


console.log(typeof typeof number)