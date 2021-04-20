const fetch = require('node-fetch');

const linkValidation = (linksArray) => {
  return new Promise((resolve, reject) => {
    const allLinksInfo = linksArray.map((link) => {
      return fetch(link.href)
          .then((result) => {
            link.status = result.status;
            link.access = (result.status == 200) ? 'OK' : 'FAIL';
          })
          .catch((error) => {
            link.status = 404;
            link.access = 'FAIL';
          });
    });
    Promise.all(allLinksInfo)
        .then(() => resolve(linksArray))
        .catch(() => {
          reject(new Error('No se obtuvo información de los links'));
        });
  });
};
module.exports.linkValidation = linkValidation;
