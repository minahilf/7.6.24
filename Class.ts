//ES6 introduced javascript classes
//Javascript classes are template
//for javascript object
//syntax
// class student{
//     constructor(){
        
//     }
// }

//example
class student{
    name1:string //state:behavior
    gender:string
    age:number

    constructor(n:string,g:string,a:number){
        this.name1=n,
        this.gender=g,
        this.age=a
    }
    studentData(){
        return `This student name is ${this.name1} and he is ${this.gender} and his/her age is ${this.age}`
    }
}

const stud1 = new student("minahil", "female",20)
const stud2 = new student("hateem", "female", 13)
const stud3 = new student("hassan", "male", 3)
//making object example
let stdData : student[] = []
stdData.push(stud1)
stdData.push(stud2)
stdData.push(stud3)

console.log(stdData); //output [
   /* student { name1: 'minahil', gender: 'female', age: 20 },
    student { name1: 'hateem', gender: 'female', age: 13 },
    student { name1: 'hassan', gender: 'male', age: 3 }
  ] */


console.log(stud1, stud2, stud3);
// output : student { name1: 'minahil', gender: 'female', age: 20 }
// student { name1: 'hateem', gender: 'female', age: 13 } student { name1: 'hassan', gender: 'male', age: 3 }

console.log(stud1.studentData()) //This student name is minahil and he is female and his/her age is 20

