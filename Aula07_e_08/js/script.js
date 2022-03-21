var card1 = {
    nome: "Ronaldo Fenômeno",
    link: "https://i.postimg.cc/RFPRDGJQ/ronaldo-fenomeno.jpg",
    atributos: {
        ataque: 94,
        habilidade: 88,
        tecnica: 90,
    }
};

var card2 = {
    nome: "Ronaldinho",
    link: "https://i.postimg.cc/Hs18XRxG/ronaldinho.jpg",
    atributos: {
        ataque: 78,
        habilidade: 99,
        tecnica: 92,
    }
};

var card3 = {
    nome: "Messi",
    link: "https://i.postimg.cc/MpCkLRrg/messi.jpg",
    atributos: {
        ataque: 90,
        habilidade: 93,
        tecnica: 90,
    }
};

var card4 = {
    nome: "Cristiano Ronaldo",
    link: "https://i.postimg.cc/C577GyWw/cristiano-ronaldo.jpg",
    atributos: {
        ataque: 98,
        habilidade: 78,
        tecnica: 80,
    }
};

var card5 = {
    nome: "Mbbappé",
    link: "https://i.postimg.cc/vHjq3y4m/mbappe.jpg",
    atributos: {
        ataque: 89,
        habilidade: 83,
        tecnica: 85
    }
}

var card6 = {
    nome: "De Bruyne",
    link: "https://i.postimg.cc/zDsC2FCn/de-bruyne.jpg",
    atributos: {
        ataque: 75,
        habilidade: 82,
        tecnica: 90,
    }
};

var card7 = {
    nome: "Iniesta",
    link: "https://i.postimg.cc/ZqnV3FtX/iniesta.jpg",
    atributos: {
        ataque: 79,
        habilidade: 93,
        tecnica: 91,
    }
};

var card8 = {
    nome: "Zidane", 
    link: "https://i.postimg.cc/50yY441T/zidane.jpg", 
    atributos: {
        ataque: 76, 
        habilidade: 82, 
        tecnica: 93
    }
};

var card9 = {
    nome: "Neymar", 
    link: "https://i.postimg.cc/7Ytx43bH/neymar.jpg", 
    atributos: {
        ataque: 85, 
        habilidade: 93, 
        tecnica: 90
        }
}

var jogadores = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

var cardJogador;
var cardAdversario;

var numVitoriasJogador = 0;
var numVitoriasAdversario = 0;

var backgroundJogador = document.querySelector(".container-jogador");
var backgroundAdversario = document.querySelector(".container-adversario");

var opcoesJogador = document.getElementById("op-jogador");
var opcoesAdversario = document.getElementById("op-adversario");

var cardApresentacao = document.querySelector(".card-apresentacao");
var containerResultado = document.querySelector(".container-resultado");

var placar = document.getElementById("placar");
var resultado = document.getElementById("resultado");


// Função atribuída ao botão "Iniciar Jogo".
function iniciarJogo(){
    sortearCards(); 
}


// Função responsável por escolher os jogadores.
function sortearCards(){
    var indiceCardJogador = parseInt(Math.random() * 9);
    var indiceCardAdversario = parseInt(Math.random() * 9);

    while(indiceCardJogador === indiceCardAdversario){
        indiceCardJogador = parseInt(Math.random() * 9);
    }

    cardJogador = jogadores[indiceCardJogador];
    cardAdversario = jogadores[indiceCardAdversario];
    
    document.getElementById("btn-iniciar").disabled = true;
    exibirCardJogador();
}


// Função cujo objetivo é mostrar na tela o card do jogador e os seus atributos.
function exibirCardJogador(){
    backgroundJogador.style.backgroundImage = `url(${cardJogador.link})`;
    var opcoesTextoJogador = '<p class="nome-jogador">' + cardJogador.nome + '</p>';

    for(var atributo in cardJogador.atributos){
        opcoesTextoJogador += `<input type="radio" name="atributo" value=${atributo} id=${atributo} checked >
                               <label for=${atributo}>${atributo}: ${cardJogador.atributos[atributo]}</label><br>`;
    }

    opcoesJogador.innerHTML = opcoesTextoJogador;
    opcoesJogador.style.display = "inline-block";

    cardApresentacao.style.display = "none";
    containerResultado.style.display = "flex";

}


// Função que tem como objetivo mostrar na tela o card do adversário, bem como seus atributos.
function exibirCardAdversario(){
    backgroundAdversario.style.backgroundImage = `url(${cardAdversario.link})`;
    var opcoesTextoAdversario = '<p class="nome-adversario">' + cardAdversario.nome + '</p>';

    for(var atributo in cardAdversario.atributos){
        opcoesTextoAdversario += `<label>${atributo}: ${cardAdversario.atributos[atributo]}</label><br>`;
    }

    opcoesAdversario.innerHTML = opcoesTextoAdversario;
    opcoesAdversario.style.display = "inline-block";
}


// Função cujo objetivo é verificar qual atributo foi escolhido.
function obterAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    
    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}


// Função atribuída ao botão "Jogar". Ela é responsável por dar início ao jogo.
function jogar(){
    var atributoSelecionado = obterAtributoSelecionado();
    var valorCardJogador = cardJogador.atributos[atributoSelecionado];
    var valorCardAdversario = cardAdversario.atributos[atributoSelecionado];

    if(valorCardJogador > valorCardAdversario){
        numVitoriasJogador++;
        placar.innerHTML = `Placar: ${numVitoriasJogador} x ${numVitoriasAdversario}`
        resultado.innerHTML = "Você ganhou! 😁";
        
    } else if(valorCardJogador < valorCardAdversario){
        numVitoriasAdversario++;
        placar.innerHTML = `Placar: ${numVitoriasJogador} x ${numVitoriasAdversario}`
        resultado.innerHTML = "Você perdeu! ☹️";

    } else if(valorCardJogador == valorCardAdversario){
        resultado.innerHTML = "Empate!";
    }

    verificarCampeao(numVitoriasJogador, numVitoriasAdversario);

    document.getElementById("btn-jogar").style.display = "none";
    document.getElementById("btn-jogar-novamente").style.display = "inline-block";

    exibirCardAdversario();

}


function jogarNovamente(){
    resetarTela();
    iniciarJogo();
}


// Função atribuída ao botão "Jogar novamente". Tem como objetivo possibilitar uma nova rodada do jogo.
function resetarTela(){
    backgroundJogador.style.backgroundImage = 'url("https://i.postimg.cc/1zZGzbZ3/card-int.png")';
    backgroundAdversario.style.backgroundImage = 'url("https://i.postimg.cc/1zZGzbZ3/card-int.png")';

    opcoesJogador.style.display = "none";
    opcoesAdversario.style.display = "none";

    resultado.innerHTML = "Boa sorte!";

    document.getElementById("btn-jogar-novamente").style.display = "none";
    document.getElementById("btn-jogar").style.display = "inline-block";

}


// Função que verifica quem foi o campeão.
function verificarCampeao(i,j){
    if(i === 10){
        resultado.innerHTML = `<strong>Parabéns!!<br><br>Você é o campeão! 🏆</strog>`;  
        document.getElementById("btn-jogar-novamente").disabled = true;
        document.getElementById("btn-iniciar").style.display = "none";
        document.getElementById("btn-reiniciar").style.display = "inline-block";

    } else if(j === 10){
        resultado.innerHTML = "<strong>Infelizmente não foi dessa vez.<br><br> Mais sorte na próxima. 🙁</strong>";
        document.getElementById("btn-jogar-novamente").disabled = true;
        document.getElementById("btn-iniciar").style.display = "none";
        document.getElementById("btn-reiniciar").style.display = "inline-block";
    }
}


// Função atribuída ao botão "Reiniciar o jogo". Tem como objetivo reiniciar o jogo por completo.
function reiniciarJogo(){
    numVitoriasJogador = 0;
    numVitoriasAdversario = 0;

    placar.innerHTML = `Placar: ${numVitoriasJogador} x ${numVitoriasAdversario}`;

    resetarTela();
    document.getElementById("btn-iniciar").disabled = false;
    document.getElementById("btn-iniciar").style.display = "inline-block";
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("btn-jogar-novamente").disabled = false;
    containerResultado.style.display = "none";
    cardApresentacao.style.display = "inline-block";

}

