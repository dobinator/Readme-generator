
const inquirer = require ("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js"); 


const questions = [ 
    {
    type: "list",
    name: "license",
    message: "What license(s) would you like to add?", 
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
    },
    
    {
    type: "input",
    name: "description",
    message: "Please give a brief description of the application?"
    },

    {
    type: "input",
    name: "installation",
    message: "What is required to be installed for the application to run smoothly, seperated by commas?",
    },
    {
    type: "input",
    name: "usage",
    message: "Please enter any usage instructions for your project."


    },
    {
    type: "input",
    name:"test",
    message: "Has this application been tested?"
    },
    {
    type: "input",
    name: "userName",
    message: "What is your Github user name?"
    },
    {
    type: "input",
    name: "emailAddress",
    message:"What is your email address?"  
    },
    {
    type: "input",
    name: "contribute",
    message:"How can one contribute to the application?" 
    }, 
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFile(fileName,data, (err) => err ? console.log
(err):  console.log ("File created"))    
}; 


// TODO: Create a function to initialize app
function init() { 
 inquirer.prompt(questions)
 .then(data => {
 writeToFile ("README.md", generateMarkdown(data))

 })
}

// Function call to initialize app
init();


