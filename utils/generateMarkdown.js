// Function to return license badge based on chosen license
function renderLicenseBadge(license) {
  if (license === "NONE") return "";
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function to return license link
function renderLicenseLink(license) {
  if (license === "NONE") return "";
  const licenseUrlMap = {
    MIT: "MIT",
    GPL: "GPL-3.0",
    APACHE: "Apache-2.0",
  };
  return `This project is licensed under the [${license}](https://opensource.org/licenses/${licenseUrlMap[license]}) license.`;
}

// Function to return license section for README
function renderLicenseSection(license) {
  if (license === "NONE") return "";
  return `## License\n\n${renderLicenseLink(license)}`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.license !== "NONE" ? "- [License](#license)" : ""}
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Questions
If you have any questions, you can reach me at [${data.email}](mailto:${
    data.email
  }).
You can also view my other projects at [GitHub - ${
    data.github
  }](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
