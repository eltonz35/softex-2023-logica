/**
 * Escreva uma função em Javascript que receba dois números
 * inteiros como parâmetros e retorne o maior número entre eles.
 */

const prompt = require("prompt-sync")();

var valor1 = prompt("Digite o primeiro numero: ");
var valor2 = prompt("Digite o segundo numero: ");

if (valor1 > valor2) {
    console.log(`O numero ${valor1} é maior que o numero${valor2}`);
} else if (valor1 == valor2) {
    console.log(`O numero ${valor1} é igual ao numero ${valor2} `);
} else {
    console.log(`O numero ${valor2} é maior que o numero ${valor1}`);
}