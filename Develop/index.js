// Operations:
// open terminal and run npm i for required dependencies
// run Node index.js in terminal and and answer prompted questions

// an fs object has been created with the fs package
const fs = require('fs');

// an inquirer object has been created with the inquirer package
const inquirer = require('inquirer');

// an generateMarkdown object has been created by referencing the generateMarkdown module in the develop folder
const generateMarkdown = require('./utils/generateMarkdown');

//  A list of possbile liscenses avaible to the user to choose from 
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// an array of questions for user input
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

        // ['None', 'MIT', 'BSD', 'GPL', 'Apache'] is loaded into choices 
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

    // method is used to asynchronously write the specified data to a file.
    // By default, the file would be replaced if it exists. 

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
           
    // file: It is a string, Buffer, URL or file description integer that denotes
    // the path of the file where it has to be written. 
    // data: It is a string, Buffer, TypedArray or DataView that will be written to the file.
    // function (err) will display an error if the write didn't occur otherwise
    // it will display the success message 'filename +  created!'
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
        .then(answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();