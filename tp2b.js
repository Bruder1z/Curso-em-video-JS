//ANALISE O CÓDIGO REFERENTE Á FUNÇÃO ABAIXO PROPOSTA E IDENTIFIQUE QUAIS SERÃO OS RETORNOS OBTIDOS A PARTIR DAS SEGUINTES CHAMADAS.

var qualASaida = function(num1=7, num2=7, num3=false){
    let exp;
    if(num3===true){
        exp=num1+num2;
    }else{
        if(num1==num2){
            exp=num1**2;
        }else if(num > num2){
            exp=num1-num2;
        }else{
            exp=num2/2;
        }
    }
    return exp;
    
}

//(7,7,false)-
//(1,2,false)-
//(6,4,false)-
//(1,6,false)-
//(true)s-