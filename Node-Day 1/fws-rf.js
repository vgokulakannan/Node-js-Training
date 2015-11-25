var fs = require('fs');
fs.writeFileSync('fws-rf.txt','Hi this is WFS-RF');

fs.readFile('./fws-rf.txt', 'utf8',function (err, data) {
  if (err) throw err;
  console.log(data);
});