// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description,
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is your README's title?",
    },
    {
      type: 'input',
      name: 'installInstr',
      message: 'Installation instructions?',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Usage information?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license are you using for this app?',
      choices: ['BSD', 'MIT', 'Apache', 'other']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Email?',
    }

  ])
  .then((answers) => {
    const htmlPageContent = writeToFile(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// TODO: Create a function to write README file
const writeToFile = ({ name, installInstr, usageInfo, contribute, testing, license, github, email }) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <header class="pb-2 mb-4 header bg-light">
      <nav class="d-flex justify-content-end navbar navbar-light mb-2" style="background-color: #e3f2fd;">
        <a class="p-3 nav-link" aria-current="page" href="#title">Title</a>
        <a class="p-3 nav-link" href="#installation">Installation</a>
        <a class="p-3 nav-link" href="#usage">Usage</a>
        <a class="p-3 nav-link" href="#contribution">Contribution guidelines</a>
        <a class="p-3 nav-link" href="#testing">Testing guidelines</a>
        <a class="p-3 nav-link" href="#license">License</a>
        <a class="p-3 nav-link" href="#contact-me">Contact me</a>
      </nav>
      <div class="container">
        <div class="card mb-4">
          <div class="card-body">
            <h1 id="title" class="card-title display-4">${name}</h1>
          </div>
        </div>
    </header>
  
    <div class="card mb-4">
      <div class="card-body">
        <h2 id="installation" class="lead">Installation instructions:${installInstr}
        </h2>
      </div>
    </div>
  
    <div class="card mb-4">
      <div class="card-body">
        <h2 id="usage" class="lead">Usage Information:${usageInfo}
        </h2>
      </div>
    </div>
  
    <div class="card mb-4">
      <div class="card-body">
        <h2 id="contribution" class="lead">Contributing guidelines:${contribute}
        </h2>
      </div>
    </div>
  
    <div class="card mb-4">
      <div class="card-body">
        <h2 id="testing" class="lead">Test guidelines:${testing}
        </h2>
      </div>
    </div>
  
    <div class="card mb-4">
      <div class="card-body">
        <h2 id="license" class="lead fw-bold">License: ${license}</h2>
      </div>
    </div>
  
  
    <h3 id="contact-me" class="p-3">Additional questions ? <span class="p-2 badge bg-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">My Email username is ${email}</li>
    </ul>
    </div>
  </body>
  </html>`;

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
