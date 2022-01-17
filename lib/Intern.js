const Employee = require ("./Employee");

class Intern extends Employee {
    constructor(title, school,employeeName, employeeID, emailAddress) { 
        super(employeeName, employeeID, emailAddress);
        this.school = school;
}

getSchool(){
    this.school;
};

getRole(){
    return "Intern"
};

};

module.exports= Intern;