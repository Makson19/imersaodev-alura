var fotos = [];   // Array onde os links das fotos serão armazenados

function publicar(){
  
  var areaFotos = document.getElementById("fotos")
  
  // Obtendo o link que foi digitado no input
  var link = document.getElementById("input").value;
  
  for(var i = 0; i <fotos.length; i++){
    if(link === fotos[i]){
      document.getElementById("input").value = "";
      return;
    }
  }
  
  areaFotos.innerHTML = areaFotos.innerHTML + `<img src=${link} >`;
  
  fotos.push(link);
  document.getElementById("input").value = "";
}