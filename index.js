// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        choices: ['MIT','ISC','Apache','WTFPL', 'None'],
    },
    {
        type: 'input',
        name: 'questions',
        message: 'GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address:'
    },
    // {
    //     type: 'input',
    //     name: 'login',
    //     message: 'Github.com/'
    // }
    
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('newReadMe.md', data,err => {
        if (err) {throw err}
        else {console.log("README Generated")}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers) {
            console.log("Success!")
        } else {
            console.log("NOPE!")
        }
        const data = generateMarkdown.generateMarkdown(answers)
        writeToFile(data);
    })
}

// Function call to initialize app
init();
