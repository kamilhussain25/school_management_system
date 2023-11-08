class school {
    name :string ;
    student :any =[];
    teacher :any =[];
    addstudent(obj:any){
        this.student.push(obj)
    }
    constructor(name :string){
        this.name =name
    }
    addteacher(obj:teacher){
        this.teacher.push(obj)
    }

}
let school1 = new school("alpha")
let school2 = new school("noor")



class student {
    name:string ;
    age :number ;
    rollnum :number
    schoolname :string
    constructor(name:string,age:number,rollnum:number,schoolname:string){
        this.name =name
        this.age = age
        this.rollnum =rollnum
        this.schoolname = schoolname
    }
}

class teacher extends student{
    email :string ;
    constructor(name :string ,age :number,schoolname:string,email:string){
        super(name,age,0,schoolname)
        this.email =email
    }
}
let student1 = new student("kamilhussain",35,111,school1.name)
let student2 = new student("imran",35,112,school2.name)
let student3 = new student("adnan",35,113,school1.name)
let student4 = new student("um e ayman",35,114,school2.name)
let t1 = new teacher("abc",35,school1.name ,"abc@gamil.com")
let t2 = new teacher("xyz",35,school2.name,"xyx@gamil.com")

school1.addstudent(student1)
school2.addstudent(student2)
school1.addstudent(student3)
school2.addstudent(student4)
school1.addteacher(t1)
school2.addteacher(t2)
console.log(school1)
console.log(school2)