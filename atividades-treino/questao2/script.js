// Script que soma os valores de A e B se forem iguais e soma caso forem diferentes.

var numA = parseInt(prompt("Digite o número A: "))
var numB = parseInt(prompt("Digite o número B: "))

if (numA === numB){
    let numC = numA + numB
    alert("A soma de A e B é: " + numC)
}
else{
    let Cnum = numA*numB
    alert("A multiplicação de A e B é: " + Cnum)
}