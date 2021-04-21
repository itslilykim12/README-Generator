const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./util/generateMarkdown.js')

//Array of Questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
            validate: titleInput => { 
                if (titleInput) {
                    return true;
                } else { 
                    console.log('Please enter a title of your project!');
                    return false;
                }
                
            },
    },
    {
        type: 'input',
        name: 'description',
        message:'What is your project?', 
            validate: (descrInput) => { 
                if (descrInput) {
                    return true;
                } else {
                    console.log('Enter a description of your project!');
                    return false;
                }
            },
    },
    {
        type: 'Input',
        name: 'Installation',
        message: 'What are the steps for installation of this application?',
            validate: (installInput) => { 
                if (installInput) {
                    return true;
                } else { 
                    console.log('Describe the steps taken for the installation of this application.');
                    return false;
                }
            },
        default: "clone the repository and execute the npm install to install all the dependencies in the file.",
    },
    {
        type: 'Input',
        name: 'Usage',
        message: 'Briefly describe how would you use this application.',
            validate: (usageInput) => { 
                if (usageInput) {
                    return true; 
                } else {
                    console.log('Enter the description on how to use this application');
                    return false;
                }
            },
        default: 'Use node index.js to run the application in the command line!',
    },
    {
        type: 'Input',
        name: 'License',
        message: 'What type of license were used for this application?',
        choices: ['MIT License', 'Apache 2.0','NONE'],
        default: 'MIT License'
    },
    {
        type: 'Input',
        name: 'test',
        message: 'What kind of tests should be taken to ensure the functionality of this application?', 
            validate: (testInput) => {
                if (testInput) {
                    return true;
                } else { 
                    console.log('Describe what tests should be taken to ensure the application runs properly.');
                    return false;
                }
            },
        default: 'Unit testing ensures the code is executed properly for the application to generate properly.',
    },
    {
        type: 'Input',
        name: 'Contribution',
        message: 'What are the guidelines that contributers and/ or collaborators to this application should follow?',
            validate: (contrInput) => { 
                if (contrInput) {
                    return true;
                } else {
                    console.log('Describe which guidelines the contributers/collaborators should follow.');
                    return false;
                }
            },
        default: 'Please follow the Contributer Covenant Guidelines https://www.contributor-covenant.org/',

    },
    {
        type: 'Input',
        name: 'github',
        message: 'Enter your github username',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Enter your github username');
                    return false;
                }
            },
    },
    {
        type: 'Input',
        name: 'Email',
        message: 'Enter your email.',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('enter your email');
                    return false;
                }
            }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();