/* eslint-disable require-jsdoc */
const fs = require('fs');
const path = require('path');

function readPath(pathDir) {
  let myPath = pathDir;
  if (fs.existsSync(pathDir)) {
    const type = fs.lstatSync(myPath);

    if (type.isFile()) {
      if (path.extname(myPath)==='.md') {
        myPath = pathDir;
      } else {
        return ('El archivo no es MD');
      }
    } else if (type.isDirectory()) {
      const absolutePath = path.isAbsolute(pathDir);

      if (!absolutePath) {
        myPath = path.join(__dirname, pathDir);
        readPath(myPath);
      } else if (absolutePath) {
        myPath = pathDir;
      }
    }
  } else {
    return ('El valor no corresponde a un directorio o archivo');
  }
  return [myPath];
};
module.exports.readPath = readPath;
