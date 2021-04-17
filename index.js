const inquirer = require("inquirer");
const {mdLinks} = require('./mdLinks.js');

async function promptUser () {
    const answers = await inquirer.prompt([{
        name: 'route',
        message: 'Escribe la ruta de la carpeta o archivo md',
        default: './',
    },{
        type: 'list',
        name: 'command',
        message:'Selecciona lo que deseas hacer',
        choices: ['Ver links', '--validate', '--stats', '--validate & --stats']
    }
    ]);
    const command = [answers.route];
    const myLinks = await mdLinks(command[0]);

}
promptUser();










