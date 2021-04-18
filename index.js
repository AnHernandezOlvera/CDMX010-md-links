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
    // const command = [answers.route];
    // const myLinks = mdLinks(path[0]);
    //console.log(myLinks)
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
        /* mdLinks(path[0])
        .then(links => {
        return linkValidation(links)
    })
    .then(linksValidate => {
        // console.log(linksUp);
        linksValidate.forEach(link => {
            if (link.status === 200) {
                console.log(chalk.white.bgGreen.bold(link.access + ' ' + link.status) + ' ' + chalk.white.bgBlueBright(link.href + ' ' + link.path));
            }
            else{
                console.log(chalk.white.bgRed.bold(link.access + ' ' + link.status) + ' ' + chalk.white.bgBlueBright(link.href + ' ' + link.path));
            }
            
        })
        
    })
    .catch(console.error); */
    
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
        /* mdLinks(path[0])
        .then(links => {
            return linkValidation(links)
        })
        .then(linkValidate => {
            return stats(linkValidate);
        })
        .then(linksStats => {
            console.table(linksStats)
        }) */

    } else if(answers.command === '--validate & --stats') {
        actions.stats = true;
        actions.validate = true;
        mdLinks(path[0], actions)
        .then(linksAdvanced => {
            console.log(chalk`
            ------------------------ {magenta.bold MD LINKS ADVANCED STATS} ------------------------\n
            TOTAL: {blue.bold ${linksAdvanced.total} links}, UNIQUE: {yellow.bold ${linksAdvanced.unique} links}, ACTIVE: {green.bold ${linksAdvanced.active} links}, BROKEN: {red.bold ${linksAdvanced.unique} links}
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
nueva()
// console.log(actions)
/* mdLinks("./some/example.md")
.then(links => {
    // => [{ href, text, file }]
})
.catch(console.error);
*/
/* mdLinks("./some/example.md", { validate: true })
.then(links => {
    // => [{ href, text, file, status, ok }]
})
.catch(console.error);

mdLinks("./some/dir")
.then(links => {
    // => [{ href, text, file }]
})
.catch(console.error); */