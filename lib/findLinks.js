const marked = require('marked');
const fs = require('fs');
const path = require('path');

const findLinks = (filesArray) => {
    if(filesArray.length === 0) {
    }
    let links = []
    filesArray.forEach(file_path => {
        const data = fs.readFileSync(file_path, "utf-8");
        let fileName = path.basename(file_path);
        let newLinks =[];
        const renderer = new marked.Renderer();

            renderer.link = (href, title , text) => {
                if(href.charAt(0) !== '#') {
                    newLinks.push({
                        href,
                        text: text.substr(0, 50),
                        file: fileName,
                        path: file_path
                    });
                }
            };
        marked(data, {renderer: renderer});
        links = links.concat(newLinks)   
    });

    return links;
}
module.exports.findLinks = findLinks;
