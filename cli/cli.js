const process = require('process');

const cli =()=> process.argv
// función posición 1
module.exports={
    cli
}
const command = cli();

const ruta = command[2];
console.log(ruta);