const Employee = require ("./Employee");

class Manager extends Employee {
    constructor(title, officeNumber, employeeName, employeeID, emailAddress) { 
        super(employeeName, employeeID, emailAddress);
        this.officeNumber = officeNumber;
        this.title = "Manager";
}}

module.exports= Manager;