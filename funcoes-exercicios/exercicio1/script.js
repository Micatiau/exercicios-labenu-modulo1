const imprimirNome = function(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  imprimirNome("Fulano"); // Olá, Fulano!

  

  const imprimirTabuada = (numero) => {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  imprimirTabuada(5); // Tabuada do 5
  imprimirTabuada(7); // Tabuada do 7
  imprimirTabuada(9); // Tabuada do 9