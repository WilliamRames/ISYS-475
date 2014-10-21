var directory = process.argv[2];
var ext = process.argv[3];
var fs = require('fs');
var criteria = RegExp('\\.' + ext + '$');

fs.readdir(directory, function(err, list) {
	for (i = 0; i < list.length; i++) {
		if (criteria.test(list[i])) {
			console.log(list[i]);
		}
	}
});