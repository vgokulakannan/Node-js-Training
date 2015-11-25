var fs = require('fs');
fs.writeFileSync('fws-frs.txt','Hi this is WFS-RFS');

//fs.readFileSync('./fws-frs.txt','utf8');

console.log(fs.readFileSync('./fws-frs.txt','utf8'));