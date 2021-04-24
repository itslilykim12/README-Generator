//function that returns a license badge for the selected license
const renderLicenseBadge = (license) => {
  const url = `img.shields.io/badge/License-${license}-yellow`;

  return `<img src="https://img.shields.io/badge/License-MIT-yellow" alt="License Badge"/>`;
};

//function to generate markdown for README
function generateMarkdown(data) {
   const {
     title, 
     description,
     installation,
     usage,
     contribution,
     license,
     test,
     github,
     email,
   } = data;
  

  return ` # ${title}

${renderLicenseBadge(license)}

## Description
${description}
  
  # Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contribution](#Contribution)
  5. [Tests](#Tests)
  6. [Contact Me](#Contact-Me)



## Installation
Please follow the instructions to install the application. 
${installation}

## Usage
${usage}

## License
This application is covered under the following licenses: https://choosealicense.com/licenses/.

## Contribution
Please follow these guidelines when contributing to the project. 
Please follow the Contributer Covenant Guidelines https://www.contributor-covenant.org/.


## Tests
The following test can be used to test the application. 
${test}

## Contact-Me
I can be reached via: 
- Github: [${github}](http://github.com/${github})
- Email: ${email}

`;
}

module.exports = generateMarkdown;