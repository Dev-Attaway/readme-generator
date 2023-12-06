// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the information on how to use this project:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter the test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Enter your github username:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {

    // a filename is created which has the address of ./README.md, which
    //  doesn't exist in this moment 
    const filename = "./README.md";

    // when called 
    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    });
}

// TODO: Create a function to initialize app
function init() {

    // On start, user will be prompted with questions using inquirer package 
    inquirer.prompt(questions)

    // when data is grabbed by inquirer.prompt
    // we call writeToFile to write the return value of generateMarkdown
    // Given that questions == answers since the user has given data
    // generateMarkdown is return a string will the data answered by the user upon init
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();