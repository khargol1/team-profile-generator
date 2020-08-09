//Dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./utils/generateHTML');
const inquirer = require('inquirer');


//Variables

let employees = [];




function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Where is the office you are located in?'
        },
    ])
}

function gatherTeamData() {

    console.log('Please select the type of employee to add or Done to finish');
    return inquirer.prompt(
        {
            type: 'list',
            name: 'type',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ).then(choice => {
        if (choice.type == 'Engineer') {
            getEngineer().then(answers => {
                let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employees.push(engineer);
                gatherTeamData();
            })
        } else if (choice.type == 'Intern') {
            getIntern().then(answers => {
                let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                employees.push(intern);
                gatherTeamData();
            })
        } else {
            //paste code here for parsing
            let parser = new generateHTML(employees);
            parser.render();
            parser.writeToFile().catch(err=> console.err(err));

        }
    })

}

function getEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is thier name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is thier employee id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is thier email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is thier GitHub user name?'
        }
    ]);
}

function getIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is thier name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is thier employee id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is thier email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the name of thier school?'
        }
    ]);
};

//Execution Code

console.log(`
Hello! I will help you build an html page for your team.
Lets begin by getting some information about you.
`);
promptUser()
    .then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employees.push(manager);
        // console.log(employees);
    })
    .then(answers => {
        gatherTeamData()

    });



