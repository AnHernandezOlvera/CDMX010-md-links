const mdLinks = require('../mdLinks.js');
const readPath = require('../lib/readPath.js');
const mock = require('../test/mock.js')
const answers1 = mock.answers1;

describe('ReadPath debe retornar una ruta absoluta', () => {
  it('path is ./', () => {
    expect(readPath.readPath('./')).toContain('/Users/anahi/Documents/laboratoria/CDMX010-md-links/lib/')
  });
  it('path is a file', () => {
    expect(readPath.readPath('/Users/anahi/Documents/laboratoria/CDMX010-md-links/README.md')).toContain('/Users/anahi/Documents/laboratoria/CDMX010-md-links/README.md')
  });
  it('value is not a path', () => {
    expect(readPath.readPath('Invalid value')).toBe('El valor no corresponde a un directorio o archivo')
  });
  
});
describe('ReadPath', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});
/* describe('ReadPath', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

}); */
