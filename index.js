const inquirer = require("inquirer");
const connection = require("./server");
const console = require("console.table");

function promptUser() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Pick an action",
            choices: [
            "View departments",
            "View roles",
            "View employees",
            "Add new role",
            "Add new Department",
            "Add new Employee",
            "Update Employee role",
            "Exit",
            ],
        },
     ])
    .then((answer) => {
        switch(answer.action){
            case "View departments":
                viewDepartment();
            break;
            case "View roles":
                viewRole();
            break;
            case "View employees":
                viewEmployee();
            break;
            case "Add new role":
                addRole();
            break;
            case "Add new Department":
                addDepartment();
            break;
            case "Add new Employee":
                addEmployee();
            break;
            case "Update Employee role":
                updateEmployeeRole();
            break;
            case "Exit":
                exit();
            break;
        }
    }
    )
}

function viewDepartment () {
    connection.query("SELECT id, deparment_name FROM department", (err, results) => {
        if(err) throw err;
        console.log('\n');
        console.table(results);
        promptUser()
    })
}

function viewRole() {
    connection.query("SELECTION roles.id, roles.job_title, department.department_name AS department, roles.salary FROM roles JOIN department ON roles.department", (err, results) => {
        if(err) throw err;
        console.log('\n');
        console.table(results);
        promptUser()
    })

}

function viewEmployee() {

}

function  addRole() {
    connection.query("SELECT * FROM department", (err, department) => {
        if (err) throw err;

        inquirer.prompt([
            {
                type: "input",
                name: "title"
            }
        ])
    })
}

function addDepartment(){

}

function addEmployee(){

}

function updateEmployeeRole() {

}