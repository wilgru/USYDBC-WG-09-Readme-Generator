const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "1/8 - title:"
    },
    {
        type: "input",
        name: "description",
        message: "2/8 - description:"
    },
    {
        type: "input",
        name: "installation",
        message: "3/8 - installation:"
    },
    {
        type: "input",
        name: "usage",
        message: "4/8 - usage:"
    },
    {
        type: "input",
        name: "contributing",
        message: "5/8 - contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "6/8 - tests:"
    },
    {
        type: "select",
        name: "licence",
        message: "7/8 - licence:"
    },
    {
        type: "input",
        name: "githubUsername",
        message: "8/8 - gtihub username:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
            err ? console.error(err) : console.log("complete!")
        }
    )
}

// TODO: Create a function to initialize app
function init() {
    //prompt user
    inquirer.prompt(questions).then(writeToFile("README.md"))
}

// Function call to initialize app
init();