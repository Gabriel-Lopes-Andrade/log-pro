// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const produto = {
  nome: "Teclado Gamer",
  //Vírgula foi substituída por ponto 
  preco: 150.00,
  estoque: 10,
};

// Desconto em porcentagem
function aplicarDesconto(valor) {
  // O desconto de 20% é aplicado através do decimal de 0.20 ,ultiplicado ao valor
  return valor - (valor * 0.20);
}

const precoFinal = aplicarDesconto(produto.preco);

//O estoque é atualizado através do "1" foi alterado para um valor numérico
produto.estoque = produto.estoque - 1;

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);

/*
Código OG:

const produto = {
  nome: "Teclado Gamer",
  preco: "150,00",
  estoque: 10,
};

// Desconto em porcentagem
function aplicarDesconto(valor) {
  return (valor - 20);
}

const precoFinal = aplicarDesconto(produto.preco);

produto.estoque = produto.estoque - ("um");

console.log("Produto: " + produto.nome);
console.log("Preço com desconto: " + precoFinal);
console.log("Estoque atual: " + produto.estoque);


*/