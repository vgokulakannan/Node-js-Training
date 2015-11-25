var fs = require('fs');

fs.writeFile('fw-rfs.txt', 'This is File Write & Read File Sync', function (err) {
  	if (err) throw err;
  else{
  	console.log(fs.readFileSync('./fw-rfs.txt','utf8'));
  }
});

