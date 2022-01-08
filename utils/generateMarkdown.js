// TODO: Create a function that returns a license badge based on which license is passed in

const generateAllInfo = {
  // If there is no license, return an empty string
  renderLicenseBadge: function (license) {
    let badge = "";
    if (license === "MIT") {
      badge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "ISC") {
      badge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (license === "Apache") {
      badge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "WTFPL") {
      badge =
        "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    } else if (license === "None") {
      badge = "";
    }
    return badge;
  },

  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  // renderLicenseLink: function(license) {}

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  // renderLicenseSection: function(license) {},

  // TODO: Create a function to generate markdown for README
  generateMarkdown: function (data) {
    return `# ${data.title}
## Description:
${data.description}
## Installation:
${data.installation}
## Usage
${data.usage}
## Contributions
${data.contributing}
## Tests
${data.tests}
## License
${this.renderLicenseBadge(data.license)}
${data.license}
## Questions
${data.questions}
${data.email}
`;
  },
};

module.exports = generateAllInfo;
