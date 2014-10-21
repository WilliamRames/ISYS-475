var http = require('http');

repeating(process.argv[2], function(){
	repeating(process.argv[3], function(){
		repeating(process.argv[4]);
	});
});

function repeating(url, another){
	http.get(url, function(stream){
		var str = "";
		stream.setEncoding('utf8');
		stream.on('data', function(data){
			str += data;
		});
		stream.on('end', function(){
			console.log(str);
			if (another) another();
		});
	});
}