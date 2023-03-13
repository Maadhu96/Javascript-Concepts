// A static method in JavaScript is a method that has a static keyword prepended to itself. Such methods cannot be accessed through instantiated objects but could be accessed through the class name. This is because static methods belong to the class directly. Inheritance even applies to static methods.

class Parent{
    static a = "Hello"
    static test() {
        return "Hello i am static method"
    }
}

// console.log(Parent.a);
class Child extends Parent{
    static demo() {
        // return this.a;
        // return `${super.a}`;
        // return this.test();
        return `${super.test()}`
    }
}
console.log(Child.demo());