const marked = require('marked');
const fs = require('fs');
const path = require('path');

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('El archivo no se puede leer'));
      } else {
        const fileName = path.basename(filePath);
        const links = [];
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
          if (href.charAt(0) !== '#') {
            links.push({
              href,
              text: text.substr(0, 50),
              file: fileName,
              path: filePath,
            });
          }
        };
        marked(data, {renderer: renderer});
        resolve(links);
      };
    });
  });
};
readFile('/Users/anahi/Desktop/MDLINKSFILES/README.md');
module.exports.readFile = readFile;
