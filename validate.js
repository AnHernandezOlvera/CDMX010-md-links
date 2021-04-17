const fetch = require('node-fetch');
const chalk = require('chalk');

const linksArray = [
    {
        href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
        text: 'Leer un directorio',
        file: 'README.md',
        path: '/Users/anahi/Desktop/MDLINKSFILES/README.md'
      },
      {
        href: 'https://nodejs.org/api/path.html',
        text: 'Path',
        file: 'README.md',
        path: '/Users/anahi/Desktop/MDLINKSFILES/README.md'
      },
      {
        href: 'https://medium.com/-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'Linea de comando CLI',
        file: 'README.md',
        path: '/Users/anahi/Desktop/MDLINKSFILES/README.md'
      },
  ]
const linkValidation = (linksArray) => {
    return new Promise ((resolve, reject) => {
        let allLinksInfo = linksArray.map((link) => { 
            return fetch(link.href).then(result => {
                if (result.status === 200) {
                    link.status = result.status;
                    link.access = 'ok';
                    console.log(chalk.white.bgBlueBright(link.path + ' ' + link.href) + ' ' + chalk.white.bgGreen.bold(link.access + ' ' + link.status) );
                } else {
                    link.status = result.status,
                    link.access = 'fail'
                    console.log(chalk.white.bgBlueBright(link.path + ' ' + link.href) + ' ' + chalk.white.bgRed.bold(link.access + ' ' + link.status) );
                }
            }).catch((error) => console.log(error));
        });
     Promise.all(allLinksInfo)
        .then(() => {
            return linksArray
        })
        .catch(err => {
        reject(console.error('Sin información de links'))
        console.log(err)});
    });
};
linkValidation(linksArray);
module.exports.linkValidation = linkValidation;