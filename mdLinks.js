// const {cli} = require('./cli/cli');
const {readPath} = require('./lib/readPath');
const {findmdFiles} = require('./lib/findFiles');
const {findLinks} = require('./lib/findLinks');
const { stats } = require('./stats.js');
const {linkValidation} = require('./validate.js')

// const command = cli();

const mdLinks = (path_dir, actions) => {
    const mypath = readPath(path_dir);
    const mdFiles = findmdFiles(mypath[0]);
    const links = findLinks(mdFiles);
    // const statics = stats(validate);

    return new Promise((resolve, reject) => {
        if (actions.validate === false && actions.stats === false) {
            resolve(links);
            
        } else if(actions.validate === true && actions.stats === false) {
            const validate = linkValidation(links);
            resolve(validate);

        } else if(actions.stats === true && actions.validate === false) {
            linkValidation(links)
            .then(linksvalidados => {
                resolve(stats(linksvalidados));
            });
        } else if (actions.validate === true && actions.stats === true) {
            linkValidation(links)
            .then(linksvalidados => {
                resolve(stats(linksvalidados));
            })
        }
    
        /* let linksMd = '';
        const mypath = readPath(path_dir);
        console.log('/◔ ◡ ◔)/ Buscando links en:', mypath[0])
        const mdFiles = findmdFiles(mypath[0]);

        if (mdFiles.length === 0) {
            reject(console.error('No se encontraron archivos md'))
        }
        else {
            const links = findLinks(mdFiles);
            linksMd = links;
            resolve(linksMd)
        } */
    });    
};

module.exports.mdLinks = mdLinks;