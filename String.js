//String no JavaScript

//Aspas dupla sou simples tanto faz
const nome1 = 'João Silva';
const nome2 = "Souza"
const idade = 80;
console.log('Meu nome é '+ nome1 + ' ' + nome2 + ' e eu tenho ' + idade + ' anos de idade!');

console.log(nome1.length); //qt caracteres
console.log(nome1.toUpperCase()); //maiusculo
console.log(nome1.toLowerCase()); //minusculo
console.log(nome1.endsWith('a')); //true se terminar com 'a'
console.log(nome1.startsWith('a')); //true se começar com 'a'
console.log(nome1.replace('a','X')); //copia que toda letra 'a' passa a ser 'X'
console.log(nome1.trim()); //sem espaço no inicio e fim
console.log(nome1.concat(nome2)); //concatena nome1 com o nome2
console.log(parseInt(nome1)); //um numero a partir da string (se possivel)
console.log(parseFloat(nome1)); //um numero decimal a partir da string (se possivel)
console.log(idade.toString()); //retorna uma string a partir de uma variavel qualquer
