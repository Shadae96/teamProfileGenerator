const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (employeeName, employeeID, emailAddress, github) { 
        super(employeeName, employeeID, emailAddress);
        this.github = github;
        this.title = "Engineer"
};


getGithub(){
    return this.github;
};

getRole(){
    return "Engineer"
};

};

module.exports= Engineer