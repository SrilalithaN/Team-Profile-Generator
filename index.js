const generateHTML = require("./src/generateHTML");
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArray = [];
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter the team Manager's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the manager's name");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID number:",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter a valid manager ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager's e-mail address:",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log(" Please enter an valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter a valid office number!");
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`Adding Employees to the team`);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose the employee's role:",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Please enter the Employee's name:",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name");
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the Employee's ID number:",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log("Please enter the employee's ID!");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter Employee's e-mail address:",
        validate: (email) => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          if (valid) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter engineer's github username:",
        when: function (input) {
          return input.role === "Engineer";
        },
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the employee's github username!");
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: function (input) {
          return input.role === "Intern";
        },
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);
      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the team.html"
      );
    }
  });
};
addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
