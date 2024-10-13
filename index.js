// Include necessary packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => (input ? true : "Project title cannot be empty."),
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description for your project:",
    validate: (input) => (input ? true : "Description cannot be empty."),
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation steps?",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information?",
    validate: (input) => (input ? true : "Usage information is required."),
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPL", "APACHE", "NONE"],
    default: "MIT",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
    default:
      "Contributions are welcome. Please open an issue or submit a pull request.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (input) => (input ? true : "GitHub username is required."),
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (input) =>
      /\S+@\S+\.\S+/.test(input) ? true : "Please enter a valid email address.",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  const filePath = path.join(__dirname, fileName);
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error("Error writing to file", err);
    } else {
      console.log(`${fileName} has been created successfully!`);
    }
  });
}

// Function to initialize the app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile("README.md", markdownContent);
    })
    .catch((error) => {
      console.error("Error during prompting", error);
    });
}

// Initialize the app
init();
