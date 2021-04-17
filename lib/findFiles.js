const fs = require("fs");
const path = require('path');

const findmdFiles = (folderName) => {
let mdFiles = [];
const findFiles = (folderName) => {
    // Leer todos los items del directorio
    const items = fs.readdirSync(folderName, { withFileTypes: true });
    // iterate over each found item
    for (item of items) {
        // if the item is a directory, it will need to be searched for files
        if (item.isDirectory()) {
        // search this directory for files (this is recursion!)
        findFiles(`${folderName}/${item.name}`);
        } else {
                // Make sure the discovered file is a sales.json file
                if (path.extname(item.name) ==='.md') {
                // store the file path in the mdFiles array
                mdFiles.push(`${folderName}/${item.name}`);
                }
            }
    }
}
// find the sales files
findFiles(folderName);
return mdFiles
}
module.exports.findmdFiles = findmdFiles;