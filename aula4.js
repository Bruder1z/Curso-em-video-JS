//string, number, boolean, undefined, bigint, object.
//variaveis indexidas, array ou vetor e a mesma coisa.
//variaveis indexidas são para usar mais que uma variavel.
//UNSHIFT entrar no começo do vetor e SHIFT remove o primeiro.
//push empurra para o final do vetor.
//pop remove o ultimo da lista.
//splice exclui a parte da posição 0 o elemento que você escolher. 
//(splice) insere a partir da posição 1 os elementos em questão. 0: nenhum elemento será excluido.
//sort ordena em ordem alfabética ou por letras maiusculas depois minusculas.
//Nós temos uma callback function quando passamos uma função como argumento para outra função.


const arrayEx = ["Lucas Moura", 22, 9.5, true];

console.log(arrayEx);
console.log("Tipo do Array: " + typeof arrayEx);
console.log("Quantos elementos? " + arrayEx.length);

console.log("O primeiro elemento do array? " + arrayEx[0] );
console.log("Qual o tipo do primeiro elemento do array? " + typeof arrayEx[0] );

const alunos=["guilherme", "bruder", "diovampeta", "albalada"];
//alunos[10]="Guerra";
//console.log(alunos[1]);
//console.table(alunos);
alunos[1] = "douglas";//substitui bruder por douglas

alunos.unshift("davi", "vini");
console.log(alunos);//davi e vini entram no começo do vetor

alunos.shift();
console.log(alunos);//remove o primeiro nome do vetor

alunos.push("joao", "maria");
console.log(alunos)//entra no final do vetor

alunos.pop();
console.log(alunos);//remove o ultimo nome do vetor

alunos.splice(0,1);//a partir da pos 0 remove o numero 1
console.log(alunos);

alunos.splice(1,0, "giovanna", "luiza");
console.log(alunos);// a aprtir da pos 1 add giovanna e luiza

console.log(alunos.sort());//ordena em ordem alfabetica ou A e a

for(let i=0; i<alunos.length-1; i++){
    console.log(alunos[i]);
}







    
