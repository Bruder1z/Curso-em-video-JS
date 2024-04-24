//JSON sistem em comum para as linguagens se comunicarem
//intercambio de dados = JSON(NOTAÇÃO DE OBJETOS DO JAVASCRIPT
//nf-e no formato XML 
//objeto é stringificado (vira string), pega a string e transforma em objeto dnv
//JSON.CRACK/EDITOR


//objetos possuem propriedades e valores(ex: ra e data de nascimento no const aluno)
var objSobrino = {
    nome: "Luan Santana", //STRING
    idade: 31, 
    eAluno: false
};

objSobrino.altura = 1.83; //Propriedade passa a existir criando essa nova variavel
//delete objSobrino.altura;//

console.table(objSobrino);

console.log("Tipo do objeto: " + typeof objSobrino);//typeof de um array é objeto
console.log(objSobrino);

var arrayAmigos = [
    {nome: "Joao", idade: 12, eAluno: false},
    {nome: "Maria", idade: 12, eAluno: false},
    {nome: "Rubio", idade: 82, eAluno: false},
    
];

console.table(arrayAmigos);
console.table(typeof arrayAmigos);

console.log(arrayAmigos[2]);

console.log(arrayAmigos[1].nome);
        
console.log(objSobrino.nome);//typeof string
console.log(typeof objSobrino.nome);

objSobrino = "Santana";//substituir o nome dentro da variavel(trocar o valor de uma propriedade)

var nomePessoa = objSobrino.nome; 
console.log(nomePessoa);

//objeto JS para uma string JSON
const stringJSON = JSON.stringify(arrayAmigos);
console.log(stringJSON);


//JSON para objeto JS
const objetosJS = JSON.parse(stringJSON);
console.table(objetosJS);