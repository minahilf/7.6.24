"use strict";
class School {
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(Teach) {
        this.teachers.push(Teach);
    }
    constructor(schoolName) {
        this.students = [];
        this.teachers = [];
        this.schoolName = schoolName;
    }
}
class Students {
    constructor(name, age, school) {
        this.name = name;
        this.age = age;
        this.school = school;
    }
}
//note: this. child class ko access krne k lye use krte or super. parent class ko
class Teacher extends Students {
    constructor() {
        super(...arguments);
        this.email = "";
        this.contact = "";
    }
    addInfo(email, contact) {
        this.email = email,
            this.contact = contact;
    }
}
let school1 = new School("SGS");
let school2 = new School("The Zai's");
let st1 = new Students("minahil", 20, school1.schoolName);
let st2 = new Students("wanya", 18, school2.schoolName);
let st3 = new Students("wasea", 18, school1.schoolName);
// console.log(st1); // Students { name: 'minahil', age: 20, school: 'SGS' }
let t1 = new Teacher("Rashida", 40, school1.schoolName);
let t2 = new Teacher("Sara", 24, school2.schoolName);
let t3 = new Teacher("Ashi", 33, school2.schoolName);
let t4 = new Teacher("Hania", 40, school1.schoolName);
//add students
school1.addStudent(st1);
school2.addStudent(st2);
school1.addStudent(st3);
//add teachers
school1.addTeacher(t1);
school1.addStudent(t4);
school2.addTeacher(t2);
school2.addTeacher(t3);
//addinfo
t1.addInfo("abc@abc.com", "23553");
t2.addInfo("rer@ab.com", "234566");
t3.addInfo("hhi@abc.com", "48478");
t4.addInfo("fho@abc.com", "53793");
console.log(school1);
console.log(school2);
/*output
School {
 students: [
   Students { name: 'minahil', age: 20, school: 'SGS' },
   Students { name: 'wasea', age: 18, school: 'SGS' },
   Teacher {
     name: 'Hania',
     age: 40,
     school: 'SGS',
     email: 'fho@abc.com',
     contact: '53793'
   }
 ],
 teachers: [
   Teacher {
     name: 'Rashida',
     age: 40,
     school: 'SGS',
     email: 'abc@abc.com',
     contact: '23553'
   }
 ],
 schoolName: 'SGS'
}
School {
 students: [ Students { name: 'wanya', age: 18, school: "The Zai's" } ],
 teachers: [
   Teacher {
     name: 'Sara',
     age: 24,
     school: "The Zai's",
     email: 'rer@ab.com',
     contact: '234566'
   },
   Teacher {
     name: 'Ashi',
     age: 33,
     school: "The Zai's",
     email: 'hhi@abc.com',
     contact: '48478'
   }
 ],
 schoolName: "The Zai's"
} */
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
/* output :
}
Teacher {
  name: 'Rashida',
  age: 40,
  school: 'SGS',
  email: 'abc@abc.com',
  contact: '23553'
}
Teacher {
  name: 'Sara',
  age: 24,
  school: "The Zai's",
  email: 'rer@ab.com',
  contact: '234566'
}
Teacher {
  name: 'Ashi',
  age: 33,
  school: "The Zai's",
  email: 'hhi@abc.com',
  contact: '48478'
}
Teacher {
  name: 'Hania',
  age: 40,
  school: 'SGS',
  email: 'fho@abc.com',
  contact: '53793'
}
*/ 
