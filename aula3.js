//DECLARAÇÃO DA FUNÇÃO
//PARAMETRO DEFAULT: FUNCTION calcularMEDIA(P1=-1, P2=-1){}
//TOFIXED(1) NAO SAIR DIZIMA PERIODICA

function calcularMedia(p1, p2){
    let media=(p1+2*p2)/3;
    return media.toFixed(1);
}


console.log("Media do Guilherme Rústico: "+ calcularMedia(4,5.55));
console.log("Media do Brudernocello: "+ calcularMedia(10, 2.5));
console.log("Media do Diovampeta: "+ calcularMedia(3.5, 6));
console.log("Media do Albalada: "+ calcularMedia(3.5, 6));

//-------------------------------------------------------//

//EXPRESSÃO DE FUNÇÃO
//se não tem nome depois da função é uma função anonima
//a expressão de função está atribuida pela variavel

let soma = function(n1, n2){
    return n1+n2
}

console.log("soma dos números: ", + soma(2, 2));

//-------------------------------------------------------//
//controle de repetição

//i=interação ou repetição
//for
for(i=1; i<=10; i++) {
    console.log(i);
}

//while

let i=10;
    while (i>=0) {
        console.log(i);
        i--;
    } 

// do/while    
i=2;
do {
    console.log(i);
    i=i+2; //i+=2
} while(i<=20);

//expressão de função pra identificar se é par ou ímpar

let parOuImpar = function(numero) {
    if (numero%2==0) {
        return "Par";
    } else{
        return "Impar";
    }
}

console.log("5 é par ou impar?" + parOuImpar(5));
console.log("2 é par ou impar?" + parOuImpar(2));
console.log("9 é par ou impar?" + parOuImpar(9));

//par ou impar 2
//operador condicional ternario
let parOuImpar2 = function(numero) {
    return (numero%2==0) ? "par" : "impar";
      
}

console.log("5 é par ou impar?" + parOuImpar2(5));
console.log("2 é par ou impar?" + parOuImpar2(2));
console.log("9 é par ou impar?" + parOuImpar2(9));
console.log("6 é par ou impar?" + parOuImpar2(6));


