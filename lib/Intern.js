const Employee = require ("./Employee");

class Intern extends Employee {
    constructor(school,employeeName, employeeID, emailAddress) { 
        super(employeeName, employeeID, emailAddress);
        this.school = school;
        this.title = "Intern"
}

getSchool(){
    return this.school;
};

getRole(){
    return "Intern"
};

};

module.exports= Intern;