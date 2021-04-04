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
        message: "Enter the installation process for your project:",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter instructions for usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter guidelines on how other developers can contribute to your project:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter any test instructions:",
        name: "tests"
    },
    {
        type: "list",
        message: "Choose a license for your project:",
        choices: [
            "Apache",
            "GNU",
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
  # ${response.title}
  ![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)<br />
  ## **Description**
  ${response.description}

  ## **Table of Contents**
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## **Installation**
  ${response.installation}

  ## **Usage**
  ${response.usage}

  ## **License**
  ![badge](https://img.shields.io/badge/license-${response.license}-brightgreen)<br/>
  This project is covered under the ${response.license} license
  

  ## **Contributing**
  ${response.contributing}

  ## **Tests**
  ${response.tests}

  ## **Questions**
  For additional questions, email me at [${response.email}](${response.email})<br/>
  Visit my Github profile at [${response.username}](https://github.com/${response.username})
  `;


  inquirer

    .prompt(questions)

    .then((response) => {
        
        const HTML = generateREADME(response);

        fs.writeFile('README.md', HTML, (error) =>
          error ? console.log(error) : console.log('New Readme created!')
        );
    
    })