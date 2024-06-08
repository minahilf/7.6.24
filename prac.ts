class Hospital{
    hName:string
    patients:Patient[]=[]
    doctors:Doctor[]=[]
    addPatients(pat:Patient){
        this.patients.push(pat)
    }
    addDoctor(doc:Doctor){
        this.doctors.push(doc)
    }
    constructor(hospitalName:string){
        this.hName=hospitalName;
    }
}  

class Patient{
    pName:string
    age:number
    hospital:string

    constructor(pName:string,age:number,hospital:string){
        this.pName=pName
        this.age=age
        this.hospital=hospital
    }
}

class Doctor extends Patient{
    Specialization:string=""
    email:string=""

    addInfo(sp:string,email:string){
        this.Specialization=sp
        this.email=email
    }
}

let HOSPITAL = new Hospital("Agha Khan")

let p1 = new Patient("Sara",34,HOSPITAL.hName)
let p2 = new Patient("Ahemd", 44,HOSPITAL.hName)

let d1 = new Doctor("Dr Amir", 65, HOSPITAL.hName)
let d2 = new Doctor("Dr Hania", 34, HOSPITAL.hName)

HOSPITAL.addDoctor(d1)
HOSPITAL.addPatients(p1)
HOSPITAL.addPatients(p2)

d1.addInfo("Child Specialist", "abc@doc.com")
d2.addInfo("Cardiologist", "abcd@doc.com")

console.log(HOSPITAL);







