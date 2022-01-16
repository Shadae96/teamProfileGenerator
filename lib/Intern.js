const Employee = require ("./Employee");

class Intern extends Employee {
    constructor(title, school,employeeName, employeeID, emailAddress) { 
        super(employeeName, employeeID, emailAddress);
        this.school = school;
        this.title = "Intern";
}}

module.exports= Intern;