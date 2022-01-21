const inquirer = require('inquirer');
const engineerRole = require("./Engineer")
const internRole = require("./Intern")
const managerRole = require("./Engineer")
const fs = require('fs');
const path = require ("path");


const templateDirectory = path.resolve(__dirname,"templates");

const render = employees => {
    const html=[];

    html.push(...employees
        .filter(employee => employee.getRole()==="Manager")
        .map(manager => renderManager(manager))
        );
    html.push(...employees
        .filter(employee => employee.getRole()==="Engineer")
        .map(engineer => renderEngineer(engineer))
        );
    html.push(...employees
        .filter(employee => employee.getRole()==="Intern")
        .map(intern => renderIntern(intern))
        );      

    return renderMain(html.join(""));
};

const renderEngineer = engineer => {
    let template = fs.readFileSync (path.resolve (templateDirectory, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "employeeName", engineer.getName());
    template = replacePlaceholders(template, "engineer", engineer.getRole());
    template = replacePlaceholders(template, "emailAddress", engineer.getEmailAddress());
    template = replacePlaceholders(template, "employeeID", engineer.getemployeeID());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

const renderManager = manager => {
    let template = fs.readFileSync (path.resolve (templateDirectory, "manager.html"), "utf-8");
    template = replacePlaceholders(template, "employeeName", manager.getName());
    template = replacePlaceholders(template, "manager", manager.getRole());
    template = replacePlaceholders(template, "emailAddress", manager.getEmailAddress());
    template = replacePlaceholders(template, "employeeID", manager.getemployeeID());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderIntern = intern => {
    let template = fs.readFileSync (path.resolve (templateDirectory, "intern.html"), "utf-8");
    template = replacePlaceholders(template, "employeeName", intern.getName());
    template = replacePlaceholders(template, "Intern", intern.getRole());
    template = replacePlaceholders(template, "emailAddress", intern.getEmailAddress());
    template = replacePlaceholders(template, "employeeID", intern.getemployeeID());
    template = replacePlaceholders(template, "school", intern.getSchool());
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve (templateDirectory, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);

};

const replacePlaceholders = (template, placeholder, value)=> {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace (pattern, value);
};



module.exports = render;