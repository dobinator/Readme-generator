

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license == "APACHE 2.0")
    return `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></img>`
    if(license == "MIT")
    return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`
    if(license == "GPL 3.0")
    return `<img src="https://img.shields.io/badge/License-GPLv3-blue.svg"></img>`
    if(license == "BSD 3")
    return `<img src="https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"></img>`
    else{
      return "";
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None")
  return `\n* [License](#license)\n`
  else{
   return ""; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== "None") {
   return `## License
   
   This project is licensed under the ${license} license`
 }
 return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

# Title
 ${data.title}

 ## Description
 ${data.description} 


 ## Table of Contents


*[Installation](#installion)
${renderLicenseLink(data.license)}

*[Usage](#usage)

*[Testing](#testing)

*[Contribute](#contribute)

*[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Testing
${data.test}

## Contribute
${data.contribute} 

## Questions
 If you have any questions about the application contact me through my Github ${data.userName} or through my
email ${data.emailAddress}. 

`

}

module.exports = generateMarkdown;
