var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response){
	var parsed = url.parse(request.url, true);
	var date = new Date(parsed.query.iso);
	response.writeHead(200, {'Content-Type':'application/json'});
	if (parsed.pathname === '/api/parsetime'){
		response.write(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}

	if (parsed.pathname === '/api/unixtime'){
		response.write(JSON.stringify({
			unixtime: Math.round(date.getTime())
		}));
	}
	response.end();
});
server.listen(process.argv[2]);