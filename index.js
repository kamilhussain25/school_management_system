"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class school {
    addstudent(obj) {
        this.student.push(obj);
    }
    constructor(name) {
        this.student = [];
        this.teacher = [];
        this.name = name;
    }
    addteacher(obj) {
        this.teacher.push(obj);
    }
}
let school1 = new school("alpha");
let school2 = new school("noor");
class student {
    constructor(name, age, rollnum, schoolname) {
        this.name = name;
        this.age = age;
        this.rollnum = rollnum;
        this.schoolname = schoolname;
    }
}
class teacher extends student {
    constructor(name, age, schoolname, email) {
        super(name, age, 0, schoolname);
        this.email = email;
    }
}
let student1 = new student("kamilhussain", 35, 111, school1.name);
let student2 = new student("imran", 35, 112, school2.name);
let student3 = new student("adnan", 35, 113, school1.name);
let student4 = new student("um e ayman", 35, 114, school2.name);
let t1 = new teacher("abc", 35, school1.name, "abc@gamil.com");
let t2 = new teacher("xyz", 35, school2.name, "xyx@gamil.com");
school1.addstudent(student1);
school2.addstudent(student2);
school1.addstudent(student3);
school2.addstudent(student4);
school1.addteacher(t1);
school2.addteacher(t2);
console.log(school1);
console.log(school2);
