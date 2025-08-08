var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split("\n");
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

// ou
// var A = parseFloat(lines[0]);
// var B = parseFloat(lines[1]);
// var C = parseFloat(lines[2]);

var media = (A*2 + B*3 + C*5) / 10.0;
console.log("MEDIA = " + media.toFixed (1));
