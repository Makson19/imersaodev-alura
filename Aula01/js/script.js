
function calcular(){
    var nota1 = document.querySelector(".nota1 input");
    var nota2 = document.querySelector(".nota2 input");
    var nota3 = document.querySelector(".nota3 input");
  
    var resultado = document.querySelector(".resultado");
    
    if(nota1.value === "" && nota2.value === "" && nota3.value === ""){
        alert("Preencha os campos vazios!");
        return;
    }
    
    nota1 = parseFloat(nota1.value);
    nota2 = parseFloat(nota2.value);
    nota3 = parseFloat(nota3.value);
    
    var media = (nota1 + nota2 + nota3)/3;
    
    if(media >= 7){
        resultado.innerHTML = `Sua média é ${media.toFixed(1).toString()}, portanto, você está <strong>APROVADO!</strong>`;
    } else if(media < 7) {
        resultado.innerHTML = `Sua média é ${media.toFixed(1).toString()}, portanto, você está <strong>REPROVADO!</strong>`;
    }
  }


  function limpar(){
    var nota1 = document.querySelector(".nota1 input");
    var nota2 = document.querySelector(".nota2 input");
    var nota3 = document.querySelector(".nota3 input");
  
    var resultado = document.querySelector(".resultado");

    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    resultado.textContent = "";
  }