function converter(){
  
    // Obtendo as opções selecionadas no combobox.
    let seletor1 = document.getElementById("seletor1");
    let seletor2 = document.getElementById("seletor2");
    
    let opcaoValor1 = seletor1.options[seletor1.selectedIndex].value;
    let opcaoValor2 = seletor2.options[seletor2.selectedIndex].value;
    
    // Obtendo o valor da temperatura digitada no input
    let input = document.getElementById("input");
    let valorInput = parseFloat(input.value);
    
    let resultado = document.getElementById("resultado");
    let valorConvertido = null;
    
    // Convertendo a temperatura
    if(opcaoValor1 === "celsius" && opcaoValor2 === "fahrenheit"){
        valorConvertido = valorInput * 1.8 + 32;
        resultado.innerHTML = `Resultado: ${valorConvertido.toFixed(1).toString()} °F`;
    } else if(opcaoValor1 === "celsius" && opcaoValor2 === "kelvin"){
        valorConvertido = valorInput + 273;
        resultado.innerHTML = `Resultado: ${valorConvertido.toFixed(1).toString()} K`;
    } else if(opcaoValor1 === "fahrenheit" && opcaoValor2 === "celsius"){
        valorConvertido = (valorInput - 32)/1.8;
        resultado.innerHTML = `Resultado: ${valorConvertido.toFixed(1).toString()} °C`;
    } else if(opcaoValor1 === "fahrenheit" && opcaoValor2 === "kelvin"){
        valorConvertido = (valorInput - 32)*(5/9) + 273;
        resultado.innerHTML = `Resultado: ${valorConvertido.toFixed(1).toString()} K`;
    } else if(opcaoValor1 === "kelvin" && opcaoValor2 === "celsius"){
        valorConvertido = valorInput - 273;
        resultado.innerHTML = `Resultado: ${valorConvertido.toFixed(1).toString()} °C`;
    } else if(opcaoValor1 === "kelvin" && opcaoValor2 === "fahrenheit"){
        valorConvertido = (valorInput - 273)*1.8 + 32;
        resultado.innerHTML = `Resultado: ${valorConvertido.toFixed(1).toString()} °F`;
    } else {
        alert("Verifique as opções escolhidas!")
    }
}