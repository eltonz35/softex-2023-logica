/*
Escreva um programa em Javascript que solicite ao usuário um número
inteiro e exiba na tela se o número é par ou ímpar
*/

const prompt = require("prompt-sync")();

var numero = prompt("Digite um numero: ")
  
if(numero % 2 == 0) {
  console.log("O numero é par")
}else {
  console.log("O numero é impar")
}