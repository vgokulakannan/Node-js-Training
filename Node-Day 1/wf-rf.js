var fs = require('fs');
fs.writeFile('msg.txt', 'Hello World', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

fs.readFile('./msg.txt', 'utf8',function (err, data) {
  if (err) throw err;
  console.log(data);
});