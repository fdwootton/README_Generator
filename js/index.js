const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description'
    },
    {
        type: "input",
        message: "Enter the installation process for your project: ",
        name: "installation"
    },
    {
        type: "input",
        message: "What is your project used for?",
        name: "usage"
    },
    {
        type: "input",
        message: "List the contributors of this projects:",
        name: "contributors"
    },
    {
        type: "input",
        message: "Enter any test instructions:",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your project: ",
        choices: [
            "Apache",
            "GNU GPLv3",
            "MIT",
            "ISC"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    }
]

const generateREADME = (response) =>
  `
  <h1 align="center">${response.title}</h1>
  
  ![badge](https://img.shields.io/badge/license-${response.license}-blue)<br />
  ## Description
  ${response.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)
  <br />

  ${response.license} license

  ## Contributors
  ${response.contributors}

  ## Tests
  ${response.tests}

  ## Questions
  For additional questions, email me at ${response.email}
  GitHub profile: [${response.username}](https://github.com/${response.username})
  `;


  inquirer

    .prompt(questions)

    .then((response) => {
        
        const HTML = generateREADME(response);

        fs.writeFile('README.md', HTML, (error) =>
          error ? console.log(error) : console.log('New Readme created!')
        );
    
    })