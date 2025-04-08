var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");
var idFuncionario = lines.shift();
var qtdHorasTrabalhadas = lines.shift();
var valorHora = lines.shift();
var salario = qtdHorasTrabalhadas * valorHora;
console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
