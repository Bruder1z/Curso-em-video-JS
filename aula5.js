const arrayAmigos = [
    "Bruder",
     "Guilherme",
     "negao",
     "Diovampeta",
     "negao",
     "Albalada",
     "negao",
     "negao",
     "negao"
]
//busca o elemento dentro do array
function localizaElemento(arrayBusca, itemBuscado ){
    return arrayBusca.indexOf(itemBuscado);

}
//arrayAmigos.indexOf("Guilherme");
//indexof mostra a ordem que o nome esta
//console.log(arrayAmigos.indexOf("joao"));


//funcao que elimina do array um elemento(se tiver apaga caso contrario coloca false na tela)
//olhar primeira linha e ver os parametros que ela vai receber e atuar
//indexof vai (retornar o elemento encontrado caso contrario retorna -1)
//pos = posicao
//splice exclui a partir daquela pos
//for, while e do while executam enqto a condição for verdadeira

function excluiElemento(arrayBusca, itemBuscado){
    let  pos = arrayBusca.indexOf(itemBuscado);
    if(pos!=-1 ){
        return arrayBusca.splice(pos,1);
    }else{
        return false;
    }
}

function excuiElementos(arrayBusca, itemBuscado){
    let pos=arrayBusca.indexOf(itemBuscado);
    while(pos!=-1){
        arrayBusca.splice(pos,1);
        pos = arrayBusca.indexOf(itemBuscado);

    }

}


console.table(arrayAmigos);
console.log("indice de guilherme no array: " + localizaElemento(arrayAmigos, "Guilherme"));

console.log("indice de negao no array: " + localizaElemento(arrayAmigos, "negao"));

console.log("indice de leo no array: " + localizaElemento(arrayAmigos, "leo"));

console.log("ANTES ------>" + arrayAmigos);

excluiElemento(arrayAmigos, "Guilherme");
excuiElementos(arrayAmigos, "negao");

console.log("DEPOIS ------>" + arrayAmigos);

function simounao(arrayBusca, itemBuscado){
    if(arrayBusca.includes(itemBuscado == true)){
return "SIM";
    }else{
        return"NÃO";
    }}
        
    

//includes retorna valor booleano para a funcao (true or false)
console.log("Existe Albalada no array?")
console.log(arrayAmigos.includes("Albalada"));

console.log("Existe Diovampeta no array?")
console.log(arrayAmigos.includes("Diovampeta"));

console.log("Existe rodrigo no array?")
console.log(arrayAmigos.includes("rodrigo"));

console.log("Existe rodrigo no array?")
console.log(arrayAmigos.includes("rodrigo"));

