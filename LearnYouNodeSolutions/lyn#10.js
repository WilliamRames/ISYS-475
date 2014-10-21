var net = require('net');

function addZero(num){
	return (num < 10) ? ('0'+num):(num);
}

function formatDate(date){
	return date.getFullYear()
	+'-'+addZero(date.getMonth()+1)
	+'-'+addZero(date.getDate())
	+' '+addZero(date.getHours())
	+':'+addZero(date.getMinutes());
}

var server = net.createServer(function(socket){
	var date = new Date();
	socket.end(formatDate(date)+'\n');
});

server.listen(Number(process.argv[2]));