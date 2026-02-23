// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50  ; //correção do valor da taxa de câmbio, substituindo a vírgula por ponto 

function converterParaReal(valorDolar) {
  let resultado = valorDolar * taxaDolar;
  return resultado;
}

console.log("O valor convertido é de : R$ " + converterParaReal(100)); //Sub do valor da transação diretamente na função, p/ evitar erros

const transacao = {
  usuario: "Carlos",
  valor: 100.00, //Troca de virgula por ponto e conversão string p número
  concluida: true,
};

const valorFinal = converterParaReal(transacao.valor);

if (transacao.concluida == true) { //Correção do valor de comparação, substituindo "sim" por true
  console.log("O valor convertido para o(a) " + transacao.usuario + " é: R$ " + valorFinal);
}
if (transacao.concluida == false) {//Correção do valor de comparação, substituindo "não" por false
  console.log("Erro no processamento.");
}

/*Código OG:

const taxaDolar = "5,50";

function converterParaReal(valorDolar) {
  let resultado = valorDolar * taxaDolar;
  return resultado;
}

console.log("O valor convertido é de : R$ " + resultado);

const transacao = {
  usuario: "Carlos",
  valor: "100,00",
  concluida: true,
};

const valorFinal = converterParaReal;

if (transacao.concluida == "sim") {
  console.log("O valor convertido para " + transacao.usuario + " é: " + valorFinal);
}
if (transacao.concluida == "não") {
  console.log("Erro no processamento.");
}

*/