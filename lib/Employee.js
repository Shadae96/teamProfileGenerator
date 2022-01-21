class Employee {
    constructor(employeeName, employeeID, emailAddress) {
    this.title = "Employee"
    this.employeeName = employeeName;
    this.employeeID = employeeID;
    this.emailAddress = emailAddress;
    };
getName(){
    return this.employeeName;
};

getRole(){
    return "Employee"
};

getemployeeID() {
    return this.employeeID;
};

getEmailAddress(){
  return  this.emailAddress;
}

};

module.exports = Employee;