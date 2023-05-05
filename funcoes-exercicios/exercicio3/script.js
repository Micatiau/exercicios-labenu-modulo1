// Declaração das funções
const soma = (num1, num2) => {
  return num1 + num2;
}

const subtracao = (num1, num2) => {
  return num1 - num2;
}

const multiplicacao = (num1, num2) => {
  return num1 * num2;
}

const divisao = (num1, num2) => {
  return num1 / num2;
}

// Recebimento dos números do usuário
const numero1 = Number(prompt("Digite o primeiro número:"));
const numero2 = Number(prompt("Digite o segundo número:"));

// Chamada das funções
const resultadoSoma = soma(numero1, numero2);
const resultadoSubtracao = subtracao(numero1, numero2);
const resultadoMultiplicacao = multiplicacao(numero1, numero2);
const resultadoDivisao = divisao(numero1, numero2);

// Impressão dos resultados no console
console.log(`A soma dos números é: ${resultadoSoma}`);
console.log(`A subtração dos números é: ${resultadoSubtracao}`);
console.log(`A multiplicação dos números é: ${resultadoMultiplicacao}`);
console.log(`A divisão dos números é: ${resultadoDivisao}`);
