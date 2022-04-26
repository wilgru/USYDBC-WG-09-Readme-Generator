
// return a colour associated eit the parsed license
// If there is no license, return an empty string
function getLicenseColour(license) {
  if (!license) {
    return "" // if license is undefined
  }
  switch(license){
    case "MIT":
      return "yellow"
    case "GPLv2":
      return "blue"
    case "GPLv3":
      return "blue"
    case "Apache_2.0":
      return "olive"
    case "BSD_3--Clause":
      return "orange"
  }
}

// return a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "" // if license is undefined
  }
  return badgeString = `[![License: ${license}](https://img.shields.io/badge/License-${license}-${getLicenseColour(license)}.svg)](${renderLicenseLink(license)})`
}

// return the license link for given license
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""
  }
  switch(license){
    case "MIT":
      return "https://opensource.org/licenses/MIT"
    case "GPLv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0"
    case "Apache_2.0":
      return "https://opensource.org/licenses/Apache-2.0"
    case "BSD_3--Clause":
      return "https://opensource.org/licenses/BSD-3-Clause"
  }
}

// return the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "" // if license is undefined
  }

  return `<a name="License"></a>
## License

This apilcation is covered under the [${license}](${renderLicenseLink(license)}) license.
`
}

//generate markdown for README
function generateMarkdown(data) {
return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description

${data.description}

## Table of Contents

[Installation](#Installation)  
[Usage](#Usage)  
[Contributing](#Contributing)  
[Usage](#Usage)  
[Questions](#Questions)  
[License](#License)  

<a name="Installation"></a>
## Installation

\`\`\`bash
${data.installation}
\`\`\`

<a name="Usage"></a>
## Usage

\`\`\`javascript
${data.usage}
\`\`\`

<a name="Contributing"></a>
## Contributing

${data.contributing}

<a name="Questions"></a>
## Questions

Have any questions? Feel free to contact me!
- Github here: [${data.githubUsername}](https://www.github.com/${data.githubUsername})
- email: [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}
`;
}

// export module
module.exports = generateMarkdown;
