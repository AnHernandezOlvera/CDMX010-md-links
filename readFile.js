const marked = require('marked');
const fs = require('fs');
const path = require('path');

const readFile = (file_path) => {
    return new Promise ((resolve, reject) => {
    fs.readFile(file_path, "utf-8", (err, data) => {
        if (err) {
            reject(new Error('El archivo no se puede leer'));
            
        } else {
            let fileName = path.basename(file_path);
            let links = [];
                const renderer = new marked.Renderer();
                renderer.link = (href, title , text) => {
                    if(href.charAt(0) !== '#') {
                        links.push({
                            href,
                            text: text.substr(0, 50),
                            file: fileName,
                            path: file_path
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