// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Project Description:'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'Installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributions:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: ['MIT','ISC','Apache','','']
    },
    {
        type: 'input',
        name: 'questions',
        message: 'GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        fs.writeFileSync('newReadMe.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
