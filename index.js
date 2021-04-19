const chalk = require('chalk');
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
        choices: ['Print links', '--validate', '--stats', '--validate & --stats', 'Exit']
    }
    ]);
    console.log(answers);
    const command = answers;
    return command;

}
const actions = {
    validate: false,
    stats: false,
};
const nueva = async () => {
    
    const answers = await promptUser();
    const path = [answers.route];

    if (answers.command === '--validate') {
        actions.validate = true;
        actions.stats === false;
        mdLinks(path[0], actions)
        .then(linksValidate => {
            linksValidate.forEach(link => {
                if (link.status === 200) {
                    console.log(chalk.white.bgBlue.bold(link.access + ' ' + link.status) + ' ' + chalk.blue.bold(link.href) + ' ' + link.path);
                }
                else{
                    console.log(chalk.white.bgRed.bold(link.access + ' ' + link.status) + ' ' + chalk.red(link.href ) + ' ' + link.path);
                }
                
            })
        })
    
    } else if (answers.command === '--stats') {
        actions.stats = true;
        actions.validate === false;
        mdLinks(path[0], actions)
        .then(linksStats => {
            console.log(chalk`
            -------- {yellow.bold MD LINKS BASIC STATS} --------\n
            TOTAL: {blue.bold ${linksStats.total} links}, UNIQUE: {green.bold ${linksStats.unique} links}.
            --------------------------------------
        `
            );
        })

    } else if(answers.command === '--validate & --stats') {
        actions.stats = true;
        actions.validate = true;
        mdLinks(path[0], actions)
        .then(linksAdvanced => {
            console.log(chalk`
            ------------------------ {magenta.bold MD LINKS ADVANCED STATS} ------------------------\n
            TOTAL: {blue.bold ${linksAdvanced.total} links}, UNIQUE: {yellow.bold ${linksAdvanced.unique} links}, ACTIVE: {green.bold ${linksAdvanced.active} links}, BROKEN: {red.bold ${linksAdvanced.broken} links}
            -------------------------------------------------------------------------
        `
            );
        })

    } else if (answers.command==='Exit'){
        console.clear();
        
    }
    else if (answers.command==='Print links'){
        actions.validate = false;
        actions.stats = false;
        mdLinks(path[0], actions)
        .then(links => {
        console.log (links)
    })
    .catch(console.error);
    }
    
}
nueva();