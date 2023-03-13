let person = {
    fName: "Swaroop",
    lName: "Hiremani",
    
    get fullname() {
        return person.fName+" "+person.lName
    },
    set fullname(val) {
        val.fName='tyss'
        
    }

}
console.log(person.fullname)