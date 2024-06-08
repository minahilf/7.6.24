"use strict";
class Hospital {
    addPatients(pat) {
        this.patients.push(pat);
    }
    addDoctor(doc) {
        this.doctors.push(doc);
    }
    constructor(hospitalName) {
        this.patients = [];
        this.doctors = [];
        this.hName = hospitalName;
    }
}
class Patient {
    constructor(pName, age, hospital) {
        this.pName = pName;
        this.age = age;
        this.hospital = hospital;
    }
}
class Doctor extends Patient {
    constructor() {
        super(...arguments);
        this.Specialization = "";
        this.email = "";
    }
    addInfo(sp, email) {
        this.Specialization = sp;
        this.email = email;
    }
}
let HOSPITAL = new Hospital("Agha Khan");
let p1 = new Patient("Sara", 34, HOSPITAL.hName);
let p2 = new Patient("Ahemd", 44, HOSPITAL.hName);
let d1 = new Doctor("Dr Amir", 65, HOSPITAL.hName);
let d2 = new Doctor("Dr Hania", 34, HOSPITAL.hName);
HOSPITAL.addDoctor(d1);
HOSPITAL.addPatients(p1);
HOSPITAL.addPatients(p2);
d1.addInfo("Child Specialist", "abc@doc.com");
d2.addInfo("Cardiologist", "abcd@doc.com");
console.log(HOSPITAL);
