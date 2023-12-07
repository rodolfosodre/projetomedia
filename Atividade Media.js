// O usuário deverá informar duas notas. O Programa deverá calcular a média e mostrar em dois parágrafos os seguintes valores
// Parágrafo media -valor da média paragrafo situação-se a média for
// menor que 5 - Reprovado
// entre 5 e 8 - Aprovado
// entre 8 e 10 - Aprovado com Destaque


function calcular media() {
    const primeiroNumero = parseFloat(document.formCalculadora.num1.value);
    const segundoNumero =  parseFloat(document.formCalculadora.num2.value);
    const operacao=document.formCalculadora.oper.value;
    let resultado;
    
    if (operacao=='+') {
        resultado=primeiroNumero+segundoNumero;
    } else if(operacao=='-') {
        resultado=primeiroNumero-segundoNumero;
    } else if(operacao=='x') {
        resultado=primeiroNumero*segundoNumero;
    } else if(operacao=='/') {
        resultado=primeiroNumero/segundoNumero;
    }
    
    const caixaResultado = document.getElementById("cresultado");
    caixaResultado.value=resultado;
    
    const paragrafoResultado=document.getElementById('presultado');
    paragrafoResultado.innerHTML=resultado;}
    