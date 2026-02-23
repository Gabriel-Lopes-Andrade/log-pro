// --- Conversor de Medidas de Fábrica ---

const mlPorLitro = 1000; //Valor de ml por L em conversão

function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl / mlPorLitro; //Divisão
  return resultado;
}

function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * mlPorLitro; //Multiplicação
  return resultado;
}

const producaoDia = {
  lote1: 1000, // ml
  lote2: 2, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (" + producaoDia.lote1 + "ml em Litros): " + calculoLote1 + "L"); //Troca de "" por produção do dia
console.log("Lote 2 (" + producaoDia.lote2 + "L em Mililitros): " + calculoLote2 + "ml"); 

const estoqueBaixo = producaoDia.lote1 == 0;

if (producaoDia.lote1 ==0 || producaoDia.lote2 == 0) {
  
  console.log("Atenção: Estoque zerado!") } //Add de if e console log p relatar etapa do estoque (EStoque baico ou zerado')

  if (producaoDia.lote1 < 1000 || producaoDia.lote2 < 1) {
    console.log("Atenção: Estoque baixo!")
  } 



/*
const mlPorLitro = "1000";

function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl * mlPorLitro;
  return resultado;
}

function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros + mlPorLitro;
  return resultado;
}

const producaoDia = {
  lote1: 5000, // ml
  lote2: 2, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");

const estoqueBaixo = true;

if ((producaoDia.lote1 = 0)) {
  console.log("Atenção: Estoque zerado!");
}
*/