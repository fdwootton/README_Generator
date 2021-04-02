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
    }
]

const generateHTML = (response) =>
  `<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>${response.title}</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">${response.title}</h1>
                <p class="lead">${response.description}.</p>
                <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
                <ul class="list-group">
                <li class="list-group-item">My GitHub username is ${answers.github}</li>
                <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
                </ul>
            </div>
        </div>
    </body>
</html>`;


inquirer

    .prompt(questions)

    .then((response) => {
        
        const HTML = generateHTML(response);

        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
    
    })