const inquirer = require("inquirer")
const fs = require("fs")

//takes an opbecj and popuales a HTML template
function htmlTemplate(responses) {
    const newHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>${responses.name}'s God Tier Portfolio</title>
    </head>
    <body class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">${responses.name}</h1>
        <h3 class="mb-2"><i>${responses.location}</i></h3>
        <p class="lead my-4">${responses.bio}</p>
        <a class="m-2" href="${responses.linkedIn}">GitHub Here</a>
        <a class="m-2" href="${responses.gitHub}">LinkedIn Here</a>
    </body>
    </html>
    `

    return newHTML
}

//prompt user
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "whats your name?"
    },
    {
        type: "input",
        name: "location",
        message: "whats your location?"
    },
    {
        type: "input",
        name: "bio",
        message: "whats your bio?"
    },
    {
        type: "input",
        name: "linkedIn",
        message: "whats your LinkedIn?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "whats your GitHub?"
    },
]).then(responses => {
    fs.writeFile(
        "index.html",
        htmlTemplate(responses), 
        (err) => {
            err ? console.error(err) : console.log("complete!")
        })
})