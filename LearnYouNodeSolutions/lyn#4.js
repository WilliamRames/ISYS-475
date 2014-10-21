var fs = require('fs');
var filename = process.argv[2];
var result = fs.readFile(filename, function(err, doc){
	console.log(doc.toString().split('\n').length - 1);
});