
const inquirer = require ("inquirer")


const questions = [ {
    type: "input",
    name: "Title",
    message: "What is the title of your project?"
    },
    {
    type: "input",
    name: "instructions",
    message: "What are your project installation instructions?"
    },
    {
    type: "input",
    name: "license",
    message: "What type of license does your project have?"
    },
    {
    type: "input",
    name: "dependencies",
    message: "What are your dependencies seperated by commas?"
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
    }
    {
    type: "input",
    name:"test",
    message: "Has this application been tested?"

    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    
}









// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


