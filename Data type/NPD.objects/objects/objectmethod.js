let empDetails= {
    eName: "Swaroop",
    id: 1447,
    company: "Tyss",
    Address: function () {
        sName="helo"
        console.log(this);
        console.log(this.eName)
    },
};
console.log(Object.keys(empDetails));
console.log(empDetails.eName);
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));
console.log(Object.entries(empDetails).flat());
console.log(Object.entries(empDetails).map((val) => { return val + "HI" }));
let h=(Object.entries(empDetails).filter((val) => { return val > "100" }));
console.log(h);
console.log(empDetails.Address.sName)

