const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown") // helper functions
const fs = require("fs")

// array of questions for user input
let questions = [
    {
        type: "input",
        name: "title",
        message: "1/10 - Project's title: "
    },
    {
        type: "input",
        name: "description",
        message: "2/10 - Description: "
    },
    {
        type: "input",
        name: "language",
        message: "3/10 - Project's language: "
    },
    {
        type: "input",
        name: "installation",
        message: "4/10 - Installation: "
    },
    {
        type: "input",
        name: "usage",
        message: "5/10 - Usage: "
    },
    {
        type: "input",
        name: "contributing",
        message: "6/10 - Contributing: "
    },
    {
        type: "input",
        name: "tests",
        message: "7/10 - Tests: "
    },
    {
        type: "list",
        name: "license",
        message: "8/10 - Licence: ",
        choices: ["MIT", "GPLv2", "GPLv3", "Apache_2.0", "BSD_3--Clause"]
    },
    {
        type: "input",
        name: "githubUsername",
        message: "9/10 - Your Github username: "
    },
    {
        type: "input",
        name: "email",
        message: "10/10 - Your email: "
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
            err ? console.error(err) : console.log(`'${fileName}' has been generated!`)
        }
    )
}

// function to initialize app
function init() {
    console.log("Lets generate a readme file! All you got to do is answer the following questions:")
    inquirer
    .prompt(questions) // prompt all the questions
    .then(data => writeToFile("README.md", data)) // then with the results, write them to a new readme file
    .catch((error) => {
        console.error(error) // if there was ann error console log it
        });
}

// Function call to initialize app
init();