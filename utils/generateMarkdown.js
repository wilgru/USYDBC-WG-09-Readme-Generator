
// return a colour associated eit the parsed license
// If there is no license, return an empty string
function getLicenseColour(license) {
  if (!license) {
    return ""
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

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  }
  return badgeString = `[![License: ${license}](https://img.shields.io/badge/License-${license}-${getLicenseColour(license)}.svg)](${renderLicenseLink(license)})`
}

// returns the license link for given license
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ""
  }

  return `
  <a name="License"/>
  ## License
  
  ${renderLicenseLink(data.license)}
  `
}

//generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  # ${data.title}

  ${data.description}

  ##Table of Contents

  [Installation](#Installation)  
  [Usage](#Usage) 
  [Contributing](#Contributing) 
  [Usage](#Usage) 
  [Questions](#Questions)
  [License](#License) 

  <a name="Installation"/>
  ##Installation

  \`\`\`bash
  ${data.installation}
  \`\`\`

  <a name="Usage"/>
  ## Usage

  \`\`\`javascript
  ${data.usage}
  \`\`\`

  <a name="Contributing"/>
  ## Contributing

  ${data.contribution}

  <a name="Questions"/>
  ## Questions

  Have any questions? You cann reach me through my Github here: [${data.githubUsername}](https://www.github.com/${data.githubUsername})

  ${renderLicenseSection(data.license)}
  `;
}

// export module
module.exports = generateMarkdown;
