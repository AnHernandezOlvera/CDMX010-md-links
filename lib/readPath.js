const fs = require("fs");
const path = require('path');

function readPath (pathDir) {
    let myPath = pathDir;
    const absolutePath = path.isAbsolute(pathDir);

    if(!absolutePath) {
        myPath = path.join(__dirname, pathDir);
        readPath(myPath);
    }
    else if(absolutePath) {
        myPath = pathDir;    
    }
    return [myPath]; 
}
module.exports.readPath = readPath;