var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function chutar(){
    // Obtendo o valor digitado no input
        var valor = document.getElementById("valor").value
    var chute = parseInt(valor);
  
    var resultado = document.getElementById("resultado")
  
    if(chute === numeroSecreto){
        resultado.innerHTML = `<mark><strong>Parabéns! Você acertou! 😃</strong></mark>`;
        return;
    } else if(chute > 10 || chute < 0){
        tentativas--;
        resultado.innerHTML = "<strong>Por favor, digite um número de 0 a 10.</strong>";
    } else if(chute < numeroSecreto){
        tentativas--;
        resultado.innerHTML = `Ops! O número é maior que ${chute}. Você tem ${tentativas} tentativas.`;
    } else if(chute > numeroSecreto){
        tentativas--;
        resultado.innerHTML = `Ops! O número é menor que ${chute}. Você tem ${tentativas} tentativas.`;
    }
  
    if(tentativas <= 0){
        resultado.innerHTML = `<mark>Acabaram suas tentativas. Mais sorte da próxima vez. 🙁</mark>`;
        return;
    }
}

function reiniciar(){
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;             // reinicia o nº de tentativas
    resultado.innerHTML = "";   // zera o resultado
    valor.value = "";           // zera o valor do input
}