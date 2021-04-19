const mdLinks = require('../mdLinks.js');
const readPath = require('../lib/readPath.js');
const findFiles = require('../lib/findFiles.js');
const mock = require('../test/mock.js')
const answers1 = mock.answers1;

describe('ReadPath must return an absolute path or an error message', () => {
  it('path is relative: ./', () => {
    expect(readPath.readPath('./')).toContain('/Users/anahi/Documents/laboratoria/CDMX010-md-links/lib/')
  });
  it('path is a file', () => {
    expect(readPath.readPath('/Users/anahi/Documents/laboratoria/CDMX010-md-links/README.md')).toContain('/Users/anahi/Documents/laboratoria/CDMX010-md-links/README.md')
  });
  it('value is not a path', () => {
    expect(readPath.readPath('Invalid value')).toBe('El valor no corresponde a un directorio o archivo')
  });
  
});
describe('findFiles must return an array of md files', () => {

  it('should...', () => {
    const path = '/Users/anahi/Documents/laboratoria/CDMX010-md-links/lib'
    const result = findFiles.findmdFiles(path);
    expect(result[0]).toMatch(/(.*?)\.md$/);
  });

});
/* describe('ReadPath', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */
