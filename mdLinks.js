// const {cli} = require('./cli/cli');
const {readPath} = require('./lib/readPath')
const {findmdFiles} = require('./lib/findFiles')
const {findLinks} = require('./lib/findLinks')

// const command = cli();

const mdLinks = async (path_dir) => {
    let linksMd = '';
    const mypath = await readPath(path_dir);
    const mdFiles = findmdFiles(mypath[0]);
    if (mdFiles.length === 0){
        console.log('No se encontraron archivos md')
    }
    else {
        const links = findLinks(mdFiles);
        linksMd = links;
        
    }
    return linksMd;
};

module.exports.mdLinks = mdLinks;