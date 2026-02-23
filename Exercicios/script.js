const elemento =
inputNome: document.querySelector("#nome");
inputPeso: document.querySelector("#peso");
inputAltura: document.querySelector("#altura");

//EX: 01
const resultado = document.querySelector("#resultado");
const span = document.querySelector("span");
console.log(span);

let paciente = {
    nome: "João",
    peso: 110,
    altura: 1.94,
    imc: 0,
};

paciente.imc = paciente.peso / (paciente.altura ** 2);

console.log(`O paciente ${paciente.nome} tem IMC de ${paciente.imc.toFixed(2)} , com peso de ${paciente.peso} kg e altura de ${paciente.altura} m.`);


resultado.innerText = `O paciente ${paciente.nome} tem IMC de ${paciente.imc.toFixed(2)} , com peso de ${paciente.peso} kg e altura de ${paciente.altura} m.`;
span.innerText = 'Quero dormir até domingo';
// QUANDO QUISER RODAR EM CONSOLE, APAGAR A PARTE ACIMA

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

somar(15,45);

//Ex: 03

let idade = 60; 

if(idade < 12){
    console.log("Você é menor de idade.");
} else if(idade >= 12 && idade < 21){
    console.log("Você é adolescente.");
} else if(idade >= 21 && idade < 60){
    console.log("Você já é adulto."); 
} else {
    console.log("Você é idoso.");
}


//Ex: 04

let interno ={

    nome: "Pedro",
    peso: 59,
    altura: 1.69,
    imc: 0,

}

//Fórmula de cálculo IMC

interno.imc = interno.peso / (interno.altura ** 2);

//Tabela de avaliação do IMC

//Retorno do resultado do IMC
console.log(`O paciente ${interno.nome} tem IMC de ${interno.imc.toFixed(2)} , com peso de ${interno.peso} kg e altura de ${interno.altura} m.`);

let imc = interno.imc;

if(imc < 18.5){
    console.log("Abaixo do peso.");
} else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal.");
} else if(imc >= 25 && imc < 30){
    console.log("Acima do peso.");
} else if(imc >= 30 && imc < 35){
    console.log("Obesidade grau 1.");
} else if(imc >= 35 && imc < 40){
    console.log("Obesidade grau 2.");
} else {
    console.log("Obesidade grau 3 ou mórbida.");
}



