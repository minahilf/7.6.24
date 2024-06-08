"use strict";
//product class extends fruits, books 
// also do dresses 
// class Human{
//     name:string
//     constructor(n:string){
//         this.name=n
//     }
//     rename(rn:string){
//         this.name=rn
//     }
// }
// let s1 = new Human("minahil")
// console.log("correction se pehle", s1);
// s1.rename("usman")
// console.log("correction k bad", s1);
class Student1 {
    constructor(n, r) {
        this.name = n;
        this.rollNum = r;
    }
}
class teacher1 extends Student1 {
    constructor(n, r, i) {
        super(n, r);
        this.id = i;
    }
}
let s1 = new Student1("minu", 20);
let t = new teacher1("sir", 34, 4);
console.log(s1, t);
