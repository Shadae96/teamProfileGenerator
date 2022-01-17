const Employee = require ("./Employee");

class Manager extends Employee {
    constructor(employeeName, employeeID,emailAddress, officeNumber,) { 
        super(employeeName, employeeID, emailAddress);
        this.officeNumber = officeNumber;
        this.title = "Manager";
}}

module.exports= Manager;