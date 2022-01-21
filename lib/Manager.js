const Employee = require ("./Employee");

class Manager extends Employee {
    constructor(employeeName, employeeID,emailAddress, officeNumber,) { 
        super(employeeName, employeeID, emailAddress);
        this.officeNumber = officeNumber;
        this.title = "Manager";
}

getOfficeNumber(){
    return this.officeNumber;
}

getRole(){
    return "Manager"
}
}

module.exports= Manager;