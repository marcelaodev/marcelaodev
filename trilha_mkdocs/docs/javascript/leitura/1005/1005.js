// https://www.beecrowd.com.br/judge/pt/problems/view/1005

var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores = input.split("\n")

var A = parseFloat(valores.shift()) * 3.5
var B = parseFloat(valores.shift()) * 7.5

// ou
// var A = parseFloat(valores[0]) * 3.5
// var B = parseFloat(valores[1]) * 7.5

var media = (A + B) / 11

console.log('MEDIA = ' + media.toFixed(5))