const inquirer = require("inquirer");
const mysql = require("mysql2");
require('dotenv').config();

// Create a connection to the Database
const dbConnect = mysql.createConnection(
    {
      host: "localhost",
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    console.log("Connected to the Company Database.")
  );

// Function that initializes the main menu the user sees when they start the app, executes function on choice

function appStart() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'options',
                message: 'Please select a feature',
                choices: [
                    'View All Employees',
                    'Add New Employee',
                    'Update Role of an Employee',
                    'View All Employee Roles',
                    'Add a Role to an existing Employee',
                    'View All Departments',
                    'Add a New Department', 
                    'Exit',
                ]
            }
        ])
        .then(({ options }) => {
            switch (options) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add New Employee':
                    addNewEmployee();
                    break;
                case 'Update Role of an Employee':
                    updateEmployeeRole();
                    break;
                case 'View All Employee Roles':
                    viewAllRoles();
                    break;
                case 'Add a Role to an existing Employee':
                    addEmployeeRole();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add a New Department':
                    addNewDepartment();
                    break;
                case 'Exit':
                    exit();
                    break;
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function viewAllEmployees() {
    dbConnect.query(
        `Select
        employee.id,
        CONCAT (employee.first_name, " ", employee.last_name) AS name,
        role.title,
        role.salary,
        CONCAT (manager.first_name, " ", manager.last_name) AS manager,
        department.name AS department
        FROM employee
        JOIN role ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id`,
       function (err, result) {
        if (err) {
            console.log(err);
        }
        console.table(result);
        appStart();
       }
    );
}