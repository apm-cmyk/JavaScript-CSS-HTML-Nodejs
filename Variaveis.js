let a= 5;
let b = 6;
let c = 7; //let existe apenas no scopo atual
var x = '7'; //var existe em todo o codigo
const y = 2; //const valor so é atribuido 1 vez


console.log('soma='+(a+b+c));

console.log('a eh igual a b? '+(a==b)); 
console.log('c eh igual a x? somente valor: '+(c==x)); //tipo igual
console.log('c eh igual a x? valor e tipo: '+(c===x)); //tipo diferente

//function

function soma(num1,num2){return num1+num2;} //primeiro exemplo obs: não é necessario o return caso não queiroa
const mult = (num1,num2) => num1*num2; //segundo exemplo: outra forma de declarar função

let resultado1 = soma(a,b);
let resultado2 = mult(a,b);
console.log('resultado1: '+ (resultado1));
console.log('resultado2: '+ (resultado2));
