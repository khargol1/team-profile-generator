//Dependencies
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');



function promptUser(){
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
        if (choice.type == 'Engineer'){
            getEngineer().then(answers => {
                let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                employees.push(engineer);
                gatherTeamData();
            })
        } else if (choice.type == 'Intern'){
            getIntern().then(answers => {
                let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                employees.push(intern);
                gatherTeamData();                
            })
        } else{
            console.log(employees);
            console.log('done');
            
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