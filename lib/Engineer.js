const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (employeeName, employeeID, emailAddress, githubUsername) { 
        super(employeeName, employeeID, emailAddress);
        this.githubUsername = githubUsername;
        this.title = "Engineer";
}}

module.exports= Engineer