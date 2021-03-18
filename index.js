
const inquirer = require ("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown.js"); 


const questions = [ 
    {
    type: "list",
    name: "licenses",
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
    name: "dependency",
    message: "What are your dependencies, seperated by commas?"
    },
    {
    type: "input",
    name:"test",
    message: "Has this application been tested?"
    },
    {
    type: "input",
    name: "name",
    message: "What is your First and Last name?"    
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



     //prompt(questions)
    // .then((burrito)=> {
    // const fileName = `${burrito.name}.json`
    //  fs.writeFile(fileName, JSON.stringify(burrito), (err)=> err ? console.log
    //  (err): console.log ("whooho")
    // )}); 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFile(fileName,data, (err) => err ? console.log
(err):  console.log ("File created"))    
}; 


// TODO: Create a function to initialize app
function init() { 
 inquirer.prompt(questions)
 .then(data => {
 writeToFile ("Readme.md", generateMarkdown(data))

 })
}

// Function call to initialize app
init();


