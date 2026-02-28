// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar se ele foi aprovado ou reprovado. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 5;

function calcularMedia() {
  return (nota1 + nota2) / 2; // Adicionando retorno
}

const media = calcularMedia();//Criando váriavel Média

if (media >= 7) {
  sta = "Aprovado";
} else {
  sta = "Reprovado"; //corrigindo o const status por sta
}

console.log(`O aluno ${nomeAluno} está: ${sta}`); //Uso crase


/*Código OG:

const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 5;

function calcularMedia() {
  let media = (nota1 + nota2) / 2;
}

calcularMedia();

if (media >= 7) {
  const status = "Aprovado";
} else {
  const status = "Reprovado";
}

console.log("O aluno " + nomeAluno + " está: " + status);

*/
