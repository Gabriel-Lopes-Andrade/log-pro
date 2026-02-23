// Exercício cálculo da área


/*
const pi = 3.149174;
let raio = 21 ** 2;


*/

//EX: 01

let paciente = {
    nome: "João",
    peso: 110,
    altura: 1.94,
    imc: 0,

};

paciente.imc = paciente.peso / (paciente.altura ** 2);

console.log(`O paciente ${paciente.nome} tem IMC de ${paciente.imc.toFixed(2)} , com peso de ${paciente.peso} kg e altura de ${paciente.altura} m.`);











//Ex: 02
let a,b,x;

a = 15;
b = 45;
x = a + b;
console.log(`X = ${x}`);

function somar(a,b){
    let x = a + b;
    console.log(`X = ${x}`);
}