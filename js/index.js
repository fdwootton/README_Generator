const inquirer = require('inquirer');
const fs = require('fs');

const prompts = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description'
    }
]