const cli = require("cli-color"); 

module.exports = {
    succe: (s) => {
        console.log(cli.green.italic.bold(s)); 
    },
    error: (s) => {
        console.log(cli.red.bold(s)); 
    },
    listen : (s) => {
        console.log(cli.blue.bold(s)); 
    }
}