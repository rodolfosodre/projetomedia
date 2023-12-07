// O Usuário vai inserir sua idade Dependendo da idade, o appp deverá mostrar em uma caixa de Texto:
// Menor de 18 anos =>" Menor de Idade"
// 18 ou mais - 25 anos -> "Jovem"
// 25 ou mais - 45 anos -> "Jovem Adulto"
// 45 ou mais - 60 anos -> "Adulto"
//60 anos ou mais ->"Você está na Terceira Idade!"
function calcular idade() {
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
    

</div>




