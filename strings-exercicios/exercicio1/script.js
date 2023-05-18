// Solicitar nome e comidas favoritas ao usuário
let nomeDoUsuario = prompt("Qual é o seu nome?");
let comida1 = prompt("Digite sua primeira comida favorita:");
let comida2 = prompt("Digite sua segunda comida favorita:");
let comida3 = prompt("Digite sua terceira comida favorita:");

let mensagem = "Estas são as comidas favoritas de " + nomeDoUsuario + ":\n" +
               "- " + comida1 + "\n" +
               "- " + comida2 + "\n" +
               "- " + comida3;

// Exibir a mensagem no console
console.log(mensagem);