//Estruturas de Controle de Fluxo com JavaScript

//Estrutura de Repetição: for,while e do-while
//Estrutura de Desvio: if-else e switch-case

//for:

for(var i=0; i<10; i++)
console.log('i=' + i);

//obs: se tiver mais instruções colocar chaves {}

//While:

let j = 0;
while(j < 10){
    console.log('Imprime While! ' +j);
    j++;
}


//do-while:

let x = 10;

do{
console.log("Imprime do-While! "+x);
x--;
}while(x>0)

//if-else

if(x===0){
    console.log("x é igual a:" +x);
}else{
    console.log("Deu erro!");
}

//é possivel fazer ifs dentro de ifs, for e etc;

//Switch Case:

let vogal = 'E';

switch(vogal){
    case 'A': console.log('letra A');
    break;
    case 'E': console.log('Letra E');
    break;
    default: console.log('Não encontrado');
}