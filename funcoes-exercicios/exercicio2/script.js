//a) 
const soma = (num1, num2) => {
  console.log(num1 + num2);
}

soma(5, 7); // resultado: 12
soma(10, 20); // resultado: 30


//b)
const maiorOuIgual = (num1, num2) => num1 >= num2;

console.log(maiorOuIgual(5, 5)); // resultado: true
console.log(maiorOuIgual(10, 5)); // resultado: true
console.log(maiorOuIgual(3, 8)); // resultado: false

//c) 
const ehPar = (num) => num % 2 === 0;

console.log(ehPar(2)); // resultado: true
console.log(ehPar(7)); // resultado: false
console.log(ehPar(10)); // resultado: true


//d)
const salarioLiquido = (salarioBruto) => salarioBruto * 0.9;

console.log(salarioLiquido(2000)); // resultado: 1800
console.log(salarioLiquido(5000)); // resultado: 4500
