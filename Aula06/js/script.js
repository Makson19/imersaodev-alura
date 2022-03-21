
var avatar = [{
    nome: "Jogador 1",
    url: "https://i.postimg.cc/j21BNmJW/avatar.png",
}, {
    nome: "Jogador 2",
    url: "https://i.postimg.cc/j21BNmJW/avatar.png",
}];

// Dados dos adversários
var adversarios = [{
    nome: "Thanos",
    url: "https://i.postimg.cc/XNzWGX4Z/thanos.jpg",
}, {
    nome: "Rei da Noite",
    url: "https://i.postimg.cc/GpdnwyJf/rei-da-noite.jpg",
}, {
    nome: "Darth Vader",
    url: "https://i.postimg.cc/SKRFxp3L/darth-vade.jpg",
}, {
    nome: "Darkseid",
    url: "https://i.postimg.cc/L5VNrd0W/darkseid.jpg",
}];

var jogadaIA = ["pedra", "papel", "tesoura"];   
var players = [];    // Array que irá conter os dados dos jogadores
var objeto = {};     // Objeto que armazenará os dados (nome, vitorias, empates, etc.) dos jogadores.
var time = 3;        // variável usada no temporizador.

var num = parseInt(Math.random() * 4);     // Número aleatório usado na escolha do jogador adversário.
var num2 = parseInt(Math.random() * 3);    // Número aleatório usado na jogada do adversário a cada rodada.

var containerCadastro = document.getElementById("container-cadastro");     // Modal de cadastro do jogador
var titleOpcao = document.querySelector(".title-opcao");
var containerOpcoes = document.querySelector(".container-opcoes");         // Container contendo as opções: "pedra", "papel" e "tesoura".
var containerResultado = document.querySelector(".container-resultado");   // Container que contém o resultado da partida.
var resultado = document.getElementById("resultado");                      // Resultado da partida.
var tempo = document.getElementById("time");                               // Tempo decorrido para mostrar o resultado da rodada.
var btnJogarNovamente = document.querySelector(".btn-jogar-novamente");    // Botão "Jogar novamente".
var tabela = document.getElementById("tabelaJogadores");                   // Tabela de pontuação.

var opPedra = document.querySelector(".btn-pedra");           // Opção "pedra".
var opPapel = document.querySelector(".btn-papel");           // Opção "papel".
var opTesoura = document.querySelector(".btn-tesoura");       // Opção "tesoura".


/* Função adicionada ao botão "Adicionar jogador". Ela tem como objetivo mostrar 
a tela de cadastro do jogador. */

function adicionarJogador(){
    containerCadastro.style.display = "inline";
}


/* Função adicionada ao botão "Adicionar" que aparece na tela de cadastro do jogador. 
Ela tem como objetivo cadastrar o jogador na tabela e nos campos dos avatares. */

function adicionar(){
    var elemento = "";

    // Pegando os vaalores que foram digitados nos inputs do modal.
    var nomeJogador = document.getElementById("name").value;
    var urlJogador = document.getElementById("url").value;

    // Pegando os locais do arquivo html onde esses valores serão adicionados.
    var labelJogador = document.querySelector(".nome-jogador");
    var imgJogador = document.querySelector(".img-jogador");

    var labelAdversario = document.querySelector(".nome-adversario");
    var imgAdversario = document.querySelector(".img-adversario");

    // Adicionando os valores digitados nos inputs no campo dos avatares.
    if(nomeJogador === "" && urlJogador === ""){
        labelJogador.innerHTML = avatar[0].nome;
        imgJogador.src = avatar[0].url;
    } else if(nomeJogador === ""){
        labelJogador.innerHTML = avatar[0].nome;
        imgJogador.src = urlJogador
    } else if(urlJogador === ""){
        labelJogador.innerHTML = nomeJogador;
        imgJogador.src = avatar[0].url;
    } else {
        labelJogador.innerHTML = nomeJogador;
        imgJogador.src = urlJogador;
    }

    labelAdversario.innerHTML = adversarios[num].nome;
    imgAdversario.src = adversarios[num].url;

    // Adicionando os valores digitados nos inputs na tabela.
    objeto.nome = (nomeJogador === "") ? avatar[0].nome : nomeJogador;
    objeto.url = (urlJogador === "") ? avatar[0].url : urlJogador;
    objeto.vitorias = 0;
    objeto.empates = 0;
    objeto.derrotas = 0;
    objeto.pontos = 0;
    players.push(objeto);
    objeto = {};

    objeto.nome = adversarios[num].nome;
    objeto.url = adversarios[num].url;
    objeto.vitorias = 0;
    objeto.empates = 0;
    objeto.derrotas = 0;
    objeto.pontos = 0;
    players.push(objeto);
    objeto = {};

    for(var i = 0; i < players.length; i++){
        elemento += `<tr><td>${players[i].nome}</td>`
        elemento += `<td>${players[i].vitorias}</td>`;
        elemento += `<td>${players[i].empates}</td>`;
        elemento += `<td>${players[i].derrotas}</td>`;
        elemento += `<td>${players[i].pontos}</td></tr>`;
    }

    tabela.innerHTML = elemento;

    titleOpcao.style.display = "inline";
    containerOpcoes.style.display = "flex";

    // Desabilitando o botão "Adicionar" após adicionarmos um jogador.
    var btn = document.querySelector(".btn-add");
    btn.disabled = true;
    btn.style.transform = "scale(1)";
    btn.style.opacity = "0.7";
}


/* Função adicionada ao botão "X" na tela de cadastro do jgador. 
Tem como objetivo fechar a tela de cadastro. */

function fechar(){
    containerCadastro.style.display = "none";
}


/* Função adicionada a opção "Pedra". Verifica se ela foi escolhida e se houve vitória na partida. */

function opcaoPedra(){
    if(opPedra.value === "pedra" && jogadaIA[num2] === "pedra"){
        players[0].empates += 1;
        players[1].empates += 1;
        resultado.innerHTML = `${players[0].nome}: ${opPedra.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>A partida terminou empatada!</strong>`;

    } else if(opPedra.value === "pedra" && jogadaIA[num2] === "tesoura"){
        players[0].vitorias += 1;
        players[1].derrotas += 1;
        resultado.innerHTML = `${players[0].nome}: ${opPedra.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>${players[0].nome} venceu a partida!</strong>`;

    } else if(opPedra.value === "pedra" && jogadaIA[num2] === "papel"){
        players[0].derrotas += 1;
        players[1].vitorias += 1;
        resultado.innerHTML = `${players[0].nome}: ${opPedra.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>${players[1].nome} venceu a partida!</strong>`;

    }
    
    num2 = parseInt(Math.random() * 3);

    titleOpcao.style.display = "none";
    containerOpcoes.style.display = "none";

    // Temporizador
    var tempoDecorrido = setInterval(() => {
        resultado.style.display = "none";
        btnJogarNovamente.style.display = "none";
        tempo.style.display = "inline";
        containerResultado.style.display = "inline";
        
        tempo.innerHTML = time;
        time -= 1;
        
        if(time === -1){
            clearInterval(tempoDecorrido);
            tempo.style.display = "none";
            resultado.style.display = "inline";
            btnJogarNovamente.style.display = "inline";
            atualizarTabela();
            time = 3;
        }
    }, 1000);
}


/* Função adicionada a opção "papel". Verifica se ela foi escolhida e se houve vitória na partida. */

function opcaoPapel(){
    if(opPapel.value === "papel" && jogadaIA[num2] === "papel"){
        players[0].empates += 1;
        players[1].empates += 1;
        resultado.innerHTML = `${players[0].nome}: ${opPapel.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>A partida terminou empatada!</strong>`;

    } else if(opPapel.value === "papel" && jogadaIA[num2] === "pedra"){
        players[0].vitorias += 1;
        players[1].derrotas += 1;
        resultado.innerHTML = `${players[0].nome}: ${opPapel.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>${players[0].nome} venceu a partida!</strong>`;

    } else if(opPapel.value === "papel" && jogadaIA[num2] === "tesoura"){
        players[0].derrotas += 1;
        players[1].vitorias += 1;
        resultado.innerHTML = `${players[0].nome}: ${opPapel.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>${players[1].nome} venceu a partida!</strong>`;
    }

    num2 = parseInt(Math.random() * 3);

    titleOpcao.style.display = "none";
    containerOpcoes.style.display = "none";
    
    // Temporizador
    var tempoDecorrido = setInterval(() => {
        resultado.style.display = "none";
        btnJogarNovamente.style.display = "none";
        tempo.style.display = "inline";
        containerResultado.style.display = "inline";
        
        tempo.innerHTML = time;
        time -= 1;
        
        if(time === -1){
            clearInterval(tempoDecorrido);
            tempo.style.display = "none";
            resultado.style.display = "inline";
            btnJogarNovamente.style.display = "inline";
            atualizarTabela();
            time = 3;
        }
    }, 1000);
}


/* Função adicionada a opção "tesoura". Verifica se ela foi escolhida e se houve vitória na partida. */

function opcaoTesoura(){
    if(opTesoura.value === "tesoura" && jogadaIA[num2] === "tesoura"){
        players[0].empates += 1;
        players[1].empates += 1;
        resultado.innerHTML = `${players[0].nome}: ${opTesoura.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>A partida terminou empatada!</strong>`;

    } else if(opTesoura.value === "tesoura" && jogadaIA[num2] === "papel"){
        players[0].vitorias += 1;
        players[1].derrotas += 1;
        resultado.innerHTML = `${players[0].nome}: ${opTesoura.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>${players[0].nome} venceu a partida!</strong>`;

    } else if(opTesoura.value === "tesoura" && jogadaIA[num2] === "pedra"){
        players[0].derrotas += 1;
        players[1].vitorias += 1;
        resultado.innerHTML = `${players[0].nome}: ${opTesoura.value}<br><br>
                               ${players[1].nome}: ${jogadaIA[num2]}<br><br><br>
                               <strong>${players[1].nome} venceu a partida!</strong>`;
    }

    num2 = parseInt(Math.random() * 3);

    titleOpcao.style.display = "none";
    containerOpcoes.style.display = "none";

    // Temporizador
    var tempoDecorrido = setInterval(() => {
        resultado.style.display = "none";
        btnJogarNovamente.style.display = "none";
        tempo.style.display = "inline";
        containerResultado.style.display = "inline";
        
        tempo.innerHTML = time;
        time -= 1;
        
        if(time === -1){
            clearInterval(tempoDecorrido);
            tempo.style.display = "none";
            resultado.style.display = "inline";
            btnJogarNovamente.style.display = "inline";
            atualizarTabela();
            time = 3;
        }
    }, 1000);
}


/* Função adicionada ao botão "Jogar novamente". Tem como objetivo permitir que o jogador jogue outra rodada. */

function jogarNovamente(){
    num2 = parseInt(Math.random() * 3);
    containerResultado.style.display = "none";
    containerOpcoes.style.display = "flex";
    atualizarTabela();
}


/* Esta função atualizar a tabela de dados a cada rodada jogada. */

function atualizarTabela(){
    var elemento = "";
    for(var i = 0; i < players.length; i++){
        elemento += `<tr><td>${players[i].nome}</td>`
        elemento += `<td>${players[i].vitorias}</td>`;
        elemento += `<td>${players[i].empates}</td>`;
        elemento += `<td>${players[i].derrotas}</td>`;
        elemento += `<td>${atualizarPontuacao(i)}</td></tr>`;
    }

    tabela.innerHTML = elemento;
}


/* Esta função calcula a pontução de cada jogador a cada rodada jogada. */

function atualizarPontuacao(i){
    var pontos = players[i].vitorias * 3 + players[i].empates;
    return pontos;
}


/* Função cujo objetivo é reiniciar o jogo. */

function reiniciar(){

    // Apagando os dados que foram digitados na tela (modal) de cadastro.
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";

    // Apagando os nomes e os avatares.
    var labelJogador = document.querySelector(".nome-jogador");
    var imgJogador = document.querySelector(".img-jogador");

    labelJogador.innerHTML = avatar[0].nome;
    imgJogador.src = avatar[0].url;

    var labelAdversario = document.querySelector(".nome-adversario");
    var imgAdversario = document.querySelector(".img-adversario");

    labelAdversario.innerHTML = avatar[1].nome;
    imgAdversario.src = avatar[1].url;

    // Apagando o container que contém o resultado da partida.
    titleOpcao.style.display = "none";
    containerOpcoes.style.display = "none";
    containerResultado.style.display = "none";

    // Apagando os dados da tabela.
    players = [];
    tabela.innerHTML = "";

    // Habilitando o botão "Adicionar".
    var btn = document.querySelector(".btn-add");
    btn.disabled = false;
    btn.style.transform = "scale(1.05)";
    btn.style.opacity = "1"; 
}
