var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var num = str.split('\n');
console.log(num.length - 1);