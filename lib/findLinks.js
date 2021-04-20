const marked = require('marked');
const fs = require('fs');
const path = require('path');

const findLinks = (filesArray) => {
  if (filesArray.length === 0) {
  }
  let links = [];
  filesArray.forEach((filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);
    const newLinks =[];
    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
      if (href.charAt(0) !== '#') {
        newLinks.push({
          href,
          text: text.substr(0, 50),
          file: fileName,
          path: filePath,
        });
      }
    };
    marked(data, {renderer: renderer});
    links = links.concat(newLinks);
  });
  return links;
};
module.exports.findLinks = findLinks;
