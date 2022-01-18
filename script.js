const inquirer = require('inquirer');
const Engineer= require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const fs = require('fs');
const path = require("path");
const { createInflate } = require('zlib');
const render = require("./lib/GenerateHTML")


const output_directory = path.resolve(__dirname, "output");
const outputPath = path.join(output_directory, "index.html");

const teamMembers = []

function startApp() { 
    createManager();
}

// Manager Info

function createManager(){
    inquirer
        .prompt([
            { 
                type:"input",
                message:"What is the team manager's name?",
                name:"employeeName",
            },

            {
                type: "input",
                message: "What is the team manager's employee ID number?",
                name: "employeeID",
            },
            {
                type: "input",
                message: "What is the team manager's email Address?",
                name: "emailAddress",
            },
            {
                type: "input",
                message: "What is the team manager's office number?",
                name: "officeNumber",
            },
        ])

        .then (val => {
            const manager = new Manager(val.employeeName,val.employeeID,val.emailAddress,val.officeNumber);
                console.log(manager)
                teamMembers.push(manager);
                addTeamMembers()

        })

        };


// Function to create array of team members


function addTeamMembers(){
    inquirer
        .prompt([
            {   
                type:"list",
                message:"Would you like to add an engineer, intern or no one else to the team?",
                name: "Role",
                choices: [ "Intern", "Engineer", "No one else"]
            }
        ])

        .then (val => {
        if (val.Role === "Engineer"){
            createEngineer()
        }

        else if(val.Role === "Intern"){
            createIntern()
        }

        else { 
            createFile();
  
        }



    }

)}














// Engineer Info

function createEngineer(){
    inquirer
        .prompt([
            { 
                type:"input",
                message:"What is the Engineer's name?",
                name:"employeeName",
            },

            {
                type: "input",
                message: "What is the Engineer's employee ID number?",
                name: "employeeID",
            },
            {
                type: "input",
                message: "What is the Engineer's email Address?",
                name: "emailAddress",
            },
            {
                type: "input",
                message: "What is the Engineer's Github username?",
                name: "github",
            },
        ])

        .then (val => {
            const engineer = new Engineer(val.employeeName,val.employeeID,val.emailAddress,val.github);
                console.log(engineer)
                teamMembers.push(engineer);
                addTeamMembers()

        })

        };




// Intern Info


function createIntern(){
    inquirer
        .prompt([
            { 
                type:"input",
                message:"What is the intern's name?",
                name:"employeeName",
            },

            {
                type: "input",
                message: "What is the intern's employee ID number?",
                name: "employeeID",
            },
            {
                type: "input",
                message: "What is the intern's email Address?",
                name: "emailAddress",
            },
            {
                type: "input",
                message: "Where does the intern go to school?",
                name: "school",
            },
        ])

        .then (val => {
            const intern = new Intern (val.employeeName,val.employeeID,val.emailAddress,val.school);
                console.log(intern)
                teamMembers.push(intern);
                addTeamMembers()

        })

        };



function createFile() {
if(!fs.existsSync(output_directory)) {
    fs.mkdirSync(output_directory)
}

fs.writeFileSync(outputPath, render(teamMembers,"UTF-8"));

}


startApp();


