"use strict";

//extensão code runner//
//adicionar comentário//
/* comentário 2 */
//cntrl , //
//cntrl + alt + n para rodar o código//
//usando "use strict", você tem que declarar a variável com "var" é de escopo global//
//Sem usar o "use strict", é só colocar x=10(por exemplo)//
// usar "==" é comparação e não atribuição//
//'let' é de escopo de bloco ou local//
//"const" variavel de valor constate (escopo de bloco)//

console.log("Oi mundo! ");

var a=3;
var b=6;
var c=a+b;
console.log("c:",c);

var x, y, z;
x=100;
const w = 10;
//w=15; nao pode redefinir valor de variavel constante//

if(x==100) {
    console.log("Sim, x vale 100!")
     let w=3;
     w=w+1;
     console.log("w: ", w);
     
    }

console.log("w: ", w);

let nome="LUCAS MOURA";
let peso=70;
let ealuno=true;

console.log("Nome", nome);
console.log("Peso:", peso);
console.log("É aluno?", ealuno);

console.log(typeof nome);
console.log(typeof peso);
console.log(typeof ealuno);