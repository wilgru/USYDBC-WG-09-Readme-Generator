const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "description",
        message: "1/6 - description:"
    },
    {
        type: "input",
        name: "installation",
        message: "2/6 - installation:"
    },
    {
        type: "input",
        name: "usage",
        message: "3/6 - usage:"
    },
    {
        type: "input",
        name: "contributing",
        message: "4/6 - contributing:"
    },
    {
        type: "input",
        name: "tests",
        message: "5/6 - tests:"
    },
    {
        type: "select",
        name: "licence",
        message: "6/6 - licence:"
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