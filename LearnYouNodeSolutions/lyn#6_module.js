var fs = require('fs'); 
var path = 
module.exports = function(directory, extension, callback) { 
	var criteria = RegExp('\\.' + extension + '$'); 
	fs.readdir(directory, function(err, files) { 
		if (err) 
			 return callback(err, null); 
		else { 
			var result = []; 
			for (i = 0; i < files.length; i++) { 
				if (criteria.test(files[i])) { 
					result.push(files[i]); 
				} 
			} 
			callback(null, result); 
		}
	});
}; 
