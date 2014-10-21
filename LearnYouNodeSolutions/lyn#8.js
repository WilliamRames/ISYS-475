var http = require('http');

http.get(process.argv[2], function(stream){
	var result = "";
	stream.setEncoding('utf8');
	stream.on('data', function(data){
		result += data;
	});
	stream.on('end', function(){
		console.log(result.length);
		console.log(result);
	});
});