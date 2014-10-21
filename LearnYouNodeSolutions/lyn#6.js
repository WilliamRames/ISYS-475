var lsmodule = require('./lyn#6_module');
var directory = process.argv[2];
var extension = process.argv[3];

lsmodule(directory, extension, function(err, results){
	for(i=0;i<results.length;i++){
		console.log(results[i]);
	}
});